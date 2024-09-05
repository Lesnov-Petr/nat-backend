const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: Object,
    default: ["User"],
  },
  employees: {
    type: Object,
    default: [{ email: "user@mail.net", roles: ["User"] }],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
          v
        );
      },
      message: () => `Формат пароля:
      - длиной минимум 6,
      - содержит латинские буквы верхнего и нижнего регистров,
      - содержит цифры`,
    },
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

companySchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };
