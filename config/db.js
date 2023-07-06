const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://jeyamaha98:jeyamaha@cluster0.r9yfyga.mongodb.net/Authentication", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
