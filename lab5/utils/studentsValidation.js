const Ajv = require("ajv");
const ajv = new Ajv();

const StudentSchema = {
    type: "object",
    properties: {
      name: { type: "string", pattern: "^[a-zA-Z]+$" },
      age: { type: "number", minimum: 15, maximum: 50 },
    },
    required: ["name", "age"],
    additionalProperties: false,
  };
  module.exports = ajv.compile(StudentSchema);

