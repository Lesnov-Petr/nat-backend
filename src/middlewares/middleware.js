const Joi = require("joi");

const addContactValidation = async (req, res, next) => {
  // next(new Error("validation failed"));
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),

    number: Joi.number(),
  });

  const validationResult = await schema.validate(req.body);

  if (validationResult.error) {
    return res
      .status(400)
      .json({ status: validationResult.error.details[0].message });
  }

  next();
};

module.exports = { addContactValidation };
