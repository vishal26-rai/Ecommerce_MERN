import { TryCatch } from "../middlewares/error.js";
import { Coupan } from "../models/coupan.js";
import ErrorHandler from "../utils/utility-class.js";
import { stripe } from "../app.js";

export const createPaymentIntent = TryCatch(async (req, res, next) => {
    const { amount } = req.body;

    if (!amount) return next(new ErrorHandler("Please Enter amount", 400));

    const paymentIntent = await stripe.paymentIntents.create({ amount: Number(amount) * 100, currency: "inr" });

    return res.status(201).json({
        success: true,
        clientSecret: paymentIntent.client_secret,
    });

});

export const newCoupan = TryCatch(async (req, res, next) => {
    const { coupan, amount } = req.body;
    await Coupan.create({ code: coupan, amount });

    if (!coupan || !amount) return next(new ErrorHandler("Please Enter both coupon and amount", 400));

    return res.status(201).json({
        success: true,
        message: `Coupon ${coupan} Created Successfully`,
    });

});

export const applyDiscount = TryCatch(async (req, res, next) => {
    const { coupan } = req.query;

    const discount = await Coupan.findOne({ code: coupan });
    if (!discount) return next(new ErrorHandler("Invalid Coupon Code", 400));

    return res.status(200).json({
        success: true,
        discount: discount.amount,
    });

});

export const allCoupans = TryCatch(async (req, res, next) => {
    const coupans = await Coupan.find({});

    return res.status(200).json({
        success: true,
        coupans,
    });

});
export const deleteCoupan = TryCatch(async (req, res, next) => {
    const { id } = req.params;

    const coupan = await Coupan.findByIdAndDelete(id);

    if (!coupan) return next(new ErrorHandler("Invalid Coupon ID", 400));

    return res.status(200).json({
        success: true,
        message: `Coupon ${coupan.code} Deleted Successfully`,
    });

});