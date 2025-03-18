import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    code: {
        type: String,
        require: [true, "Please Enter the Coupan Code"],
        unique: true,
    },
    amount: {
        type: Number,
        require: [true, "Please Enter the Discount Amount"],
    },
});

export const Coupan = mongoose.model("Coupan", schema);