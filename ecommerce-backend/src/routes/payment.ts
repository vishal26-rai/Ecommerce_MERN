import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { allCoupans, applyDiscount, createPaymentIntent, deleteCoupan, newCoupan } from "../controllers/payment.js";
const app = express.Router();


//route - /api/v1/payment/create
app.post("/create",createPaymentIntent);

//route - /api/v1/payment/discount
app.get("/discount",applyDiscount);

//route - /api/v1/payment/coupan/new
app.post("/coupan/new",adminOnly,newCoupan);

//route - /api/v1/payment/coupan/all
app.get("/coupan/all",adminOnly,allCoupans);

//route - /api/v1/payment/coupan/:id
app.delete("/coupan/:id",adminOnly,deleteCoupan);

export default app;
