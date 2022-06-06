const { body, validationResult } = require("express-validator");

exports.validateEmail = [
    body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.render("index", { msg: InvalidErr.array()[0].msg });
        }
        next();
    },
];
