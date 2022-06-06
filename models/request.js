const mongoose = require("mongoose");

let RequestSchema = new mongoose.Schema(
    {
        //simplified version of the request object
        email: { type: String },
    },
    {
        timestamps: true,
    }
);

const Request = mongoose.model("request", RequestSchema, "Requests");
module.exports = Request;
