const paypal = require("../../helpers/paypal");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5173/shop/paypal-return",
        cancel_url: "http://localhost:5173/shop/paypal-cancel",
      },
      transactions: [
        {
          item_list: {
            items: cartItems.map((item) => ({
              name: item.title,
              sku: item.productId,
              price: item.price.toFixed(2),
              currency: "USD",
              quantity: item.quantity,
            })),
          },
          amount: {
            currency: "USD",
            total: totalAmount.toFixed(2),
          },
          description: "description",
        },
      ],
    };

    paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: "Error while creating paypal payment",
        });
      } else {
        const newlyCreatedOrder = new Order({
          userId,
          cartId,
          cartItems,
          addressInfo,
          orderStatus,
          paymentMethod,
          paymentStatus,
          totalAmount,
          orderDate,
          orderUpdateDate,
          paymentId,
          payerId,
        });

        await newlyCreatedOrder.save();

        const approvalURL = paymentInfo.links.find(
          (link) => link.rel === "approval_url"
        ).href;

        res.status(201).json({
          success: true,
          approvalURL,
          orderId: newlyCreatedOrder._id,
        });
      }
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;
    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order can not be found",
      });
    }

    // Execute the PayPal payment
    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: order.totalAmount.toFixed(2),
            details: {
              subtotal: order.totalAmount.toFixed(2),
            },
          },
          description: "Payment for order",
          payment_options: {
            allowed_payment_method: "INSTANT_FUNDING_SOURCE",
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async (error, payment) => {
        if (error) {
          console.error("PayPal payment execution error:", error);
          return res.status(500).json({
            success: false,
            message: "Error executing PayPal payment",
            error: error.response,
          });
        }

        // Verify payment state
        if (payment.state !== "approved") {
          return res.status(400).json({
            success: false,
            message: "Payment not approved",
            payment_state: payment.state,
          });
        }

        // Payment successful, update order
        order.paymentStatus = "paid";
        order.orderStatus = "confirmed";
        order.paymentId = paymentId;
        order.payerId = payerId;

        // Update product stock
        for (let item of order.cartItems) {
          let product = await Product.findById(item.productId);

          if (!product) {
            return res.status(404).json({
              success: false,
              message: `Product not found: ${item.title}`,
            });
          }

          if (product.totalStock < item.quantity) {
            return res.status(400).json({
              success: false,
              message: `Not enough stock for product: ${product.title}`,
            });
          }

          product.totalStock -= item.quantity;
          await product.save();
        }

        // Delete cart and save order
        const getCartId = order.cartId;
        await Cart.findByIdAndDelete(getCartId);
        await order.save();

        res.status(200).json({
          success: true,
          message: "Payment successful and order confirmed",
          data: {
            order,
            payment_details: {
              payment_id: payment.id,
              state: payment.state,
              amount: payment.transactions[0].amount.total,
              currency: payment.transactions[0].amount.currency,
            },
          },
        });
      }
    );
  } catch (e) {
    console.error("Capture payment error:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
      error: e.message,
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
