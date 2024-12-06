import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/gymmer1.jpg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";

function ShoppingAccount() {
  return (
      <div className="flex flex-col">
        <div className="relative w-full overflow-hidden">
          <img
              src={accImg}
              className="w-full h-auto object-cover object-center aspect-[16/9]"
          />
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <Tabs defaultValue="orders">
              <TabsList>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="address">Address</TabsTrigger>
              </TabsList>
              <TabsContent value="orders">
                <ShoppingOrders />
              </TabsContent>
              <TabsContent value="address">
                <Address />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
  );
}

export default ShoppingAccount;
