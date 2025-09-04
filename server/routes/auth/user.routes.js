const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const {
  registerUser,
  loginUser,
} = require("../../controllers/auth/user.controller");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post(
  "/register",
  body("username").trim().isLength({ min: 3 }),
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("password").trim().isLength({ min: 8 }),
  validate,
  registerUser
);

router.post(
  "/login",
  body("username").trim().isLength({ min: 3 }),
  body("password").trim().isLength({ min: 8 }),
  validate,
  loginUser
);

module.exports = router;
