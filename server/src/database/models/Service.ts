import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  type: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  number: {
    type: Schema.Types.Number,
    default: 0,
    required: false,
  },
  designation: {
    type: Schema.Types.String,
    default: "UNKNOWN",
    required: false,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
});

const serviceModel = model("service", serviceSchema);

export default serviceModel;
