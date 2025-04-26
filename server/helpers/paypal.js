const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AQPWsFquVBR_GyVHTmwPwR3fSXmbVEAN_V0i9-O7nHVx0diktxxKKSRRmF85MMBB8GN_j_Wf5LzpjKE_",
  client_secret:
    "ECFbPMDX7GJL2TTa8byiGJDCGD6NCxSrpQwP-56Guc7cf9KukOEutnhYB8mHrE6CcHCTvpIc5Hl32kc2",
});

module.exports = paypal;
