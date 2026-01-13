const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");

const Product = require("./models/Product");
const Bill = require("./models/Bill");
const razorpay = require("./razorpay");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/smartcheckout");

// Fetch product
app.get("/product/:barcode", async (req, res) => {
  const product = await Product.findOne({ barcode: req.params.barcode });
  res.json(product);
});

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  const { cart } = req.body;
  const amount = cart.reduce((sum, p) => sum + p.price, 0) * 100;

  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
    receipt: "receipt_" + Date.now()
  });

  res.json(order);
});

// Verify payment & save bill
app.post("/verify-payment", async (req, res) => {
  const { paymentId, orderId, signature, cart, amount } = req.body;

  const body = orderId + "|" + paymentId;
  const expectedSignature = crypto
    .createHmac("sha256", "XXXXXXXXXXXX")
    .update(body)
    .digest("hex");

  if (expectedSignature === signature) {
    const bill = new Bill({
      products: cart,
      total: amount,
      paymentId,
      orderId,
      status: "PAID"
    });
    await bill.save();
    res.json(bill);
  } else {
    res.status(400).json({ error: "Payment verification failed" });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
