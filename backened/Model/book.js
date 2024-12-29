const mongoose = require("mongoose");

const book = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", book);
