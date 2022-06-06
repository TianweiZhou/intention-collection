const rateLimit = require("express-rate-limit");

exports.getLimiter = () => {
    try {
        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 30,
            message: "Too many requests, please try again after 15 mins",
        });
        return limiter;
    } catch (err) {
        throw new Error(err);
    }
};
