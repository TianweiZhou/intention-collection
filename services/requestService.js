const { DateTime } = require("luxon");
const Request = require("../models/request");

//service for POST /
exports.sendRequest = async (email) => {
    try {
        const existEmail = await Request.findOne({ email: email });
        if (existEmail) {
            throw new Error("Already subscribed with this email");
        }
        const newReq = new Request({
            email: email,
            createDateTime: DateTime.local().setZone("America/Toronto"),
        });
        await newReq.save();
        return { msg: "Thank you for subscribing" };
    } catch (err) {
        throw new Error(err.message);
    }
};
