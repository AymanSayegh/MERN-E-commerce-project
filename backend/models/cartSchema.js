const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required for the cart"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
