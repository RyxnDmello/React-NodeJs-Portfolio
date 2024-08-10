import { Option, Input } from "@interfaces/Contact";

import Name from "@public/images/inputs/username.png";
import Email from "@public/images/inputs/email.png";
import Designation from "@public/images/inputs/designation.png";
import Number from "@public/images/inputs/number.png";
import Description from "@public/images/inputs/description.png";

export const options: Option[] = [
  {
    name: "Drop A Comment",
    type: "Comment",
  },
  {
    name: "Web Development",
    type: "Web Application",
  },
  {
    name: "Mobile Development",
    type: "Mobile Application",
  },
  {
    name: "UI • UX App Design",
    type: "UI • UX App Design",
  },
];

export const inputs: Input[] = [
  {
    icon: Name,
    label: "Name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    icon: Designation,
    label: "Designation",
    name: "designation",
    type: "text",
    required: false,
  },
  {
    icon: Number,
    label: "Number",
    name: "number",
    type: "number",
    required: false,
  },
  {
    icon: Description,
    label: "Description",
    name: "description",
    type: "textarea",
    required: true,
  },
];