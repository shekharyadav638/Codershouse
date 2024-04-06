const router = require("express").Router();
const { register, activate, login } = require("./controllers/auth.controller");
const { requireSignin } = require("./middlewares");
