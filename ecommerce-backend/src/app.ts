import { config } from "dotenv";
import express from "express";
import NodeCache from "node-cache";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";
import morgan from "morgan"
import cors from "cors";


// Imported Routes
import orderRoute from "./routes/orders.js";
import productRoute from "./routes/products.js";
import userRoute from "./routes/user.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoutes from "./routes/stats.js"
import Stripe from "stripe";

config({
    path:"./.env"
});
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("API is working with /api/v1");
});

app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/order",orderRoute);
app.use("/api/v1/payment",paymentRoute);
app.use("/api/v1/dashboard",dashboardRoutes);

app.use("/uploads",express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, ()=>{
    console.log(`Server is working on http://localhost:${port}`);
})