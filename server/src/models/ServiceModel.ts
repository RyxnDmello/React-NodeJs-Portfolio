import { Schema, model } from "mongoose";

export type SERVICE =
  | "Comment"
  | "Web Application"
  | "Mobile Application"
  | "UI • UX App Design";

export interface Service {
  type: SERVICE;
  name: string;
  email: string;
  mobile?: number;
  designation: string;
  description: string;
}

const serviceSchema = new Schema<Service>(
  {
    type: {
      type: Schema.Types.String,
      required: true,
      enum: {
        values: [
          "Comment",
          "Web Application",
          "Mobile Application",
          "UI • UX App Design",
        ],
        message: "Invalid Contact Type",
      },
      default: "Comment",
    },
    name: {
      type: Schema.Types.String,
      required: true,
      minlength: [4, "Name Must Be A Minimum of 4 Characters"],
      maxlength: [50, "Name Must Be A Maximum of 50 Characters"],
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    mobile: {
      type: Schema.Types.Number,
      required: false,
      min: [
        6000000000,
        "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
      ],
      max: [
        9999999999,
        "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
      ],
      default: null,
    },
    designation: {
      type: Schema.Types.String,
      required: false,
      default: "Not Provided",
    },
    description: {
      type: Schema.Types.String,
      required: true,
      minlength: [4, "Description Must Be A Minimum of 4 Characters"],
      maxlength: [250, "Description Must Be A Maximum of 250 Characters"],
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const ServiceModel = model("service", serviceSchema);

export default ServiceModel;
