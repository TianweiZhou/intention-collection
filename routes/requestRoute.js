const express = require("express");
const router = express.Router();

const RequestService = require("../services/requestService");
const Validator = require("../validators/requestValidator");

router.get("/", async (req, res) => {
    try {
        res.render("index");
    } catch (err) {
        return res.render("index", { msg: err.message });
    }
});

router.post("/", Validator.validateEmail, async (req, res) => {
    try {
        const email = req.body.email;
        await RequestService.sendRequest(email);
        return res.render("success");
    } catch (err) {
        return res.render("index", { msg: err.message });
    }
});

module.exports = router;
