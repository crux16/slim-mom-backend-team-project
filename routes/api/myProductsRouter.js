const express = require("express");

const {
  validation,
  auth,
  ctrlWrapper,
  joiGetMyProductSchema,
} = require("../../middlewares");
const { myProducts: ctrl } = require("../../controllers");

const router = express.Router();

router.use(auth);
// TODO: ADD AND DELETE PRODUCTS ROUTER


router.post(
  "/listMyProduct",
  validation(joiGetMyProductSchema),
  ctrlWrapper(ctrl.getMyProducts)
);

module.exports = router;
