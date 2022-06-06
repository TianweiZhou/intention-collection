const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

const connectDB = require("./database/connection");
const RequestRoute = require("./routes/requestRoute");
const RateLimiter = require("./middleware/rateLimiter");

const PORT = process.env.PORT || 4060;

try {
    connectDB;

    app.set("view engine", "pug");
    app.set("views", "./views");

    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.json({ limit: "5mb" }));
    app.use(express.urlencoded({ extended: true }));

    app.use(RateLimiter.getLimiter());
    app.use("/", RequestRoute);

    app.listen(PORT, () => {
        console.log(`listening at ${PORT}`);
    });
} catch (err) {
    console.log(err.message);
}
