const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reqiured: true,
      unique: true,
    },
    desc: {
      type: String,
      reqiured: true,
    },
    photo: {
      type: String,
      reqiured: false,
    },
    username: {
      type: String,
      reqiured: true,
    },
    categories: {
      type: Array,
      reqiured: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
