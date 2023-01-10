const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormRecordSchema = new Schema({
  Name: String,
  Department: String,
  RoomNum: String,
  roll: String,
  phone: String,
  address: String,
  description: String,
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("FormRecord", FormRecordSchema);
