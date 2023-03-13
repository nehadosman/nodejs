const Ajv = require("ajv");
const ajv = new Ajv();

const CoursesSchema = {
    type: "object",
    properties: {
      name: { type: "string" },
      duration: { type: "number" },
    },
    required: ["name", "duration"],
    additionalProperties: false,
  };

  module.exports = ajv.compile(CoursesSchema);
  