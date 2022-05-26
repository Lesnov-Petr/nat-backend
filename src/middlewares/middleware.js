const Joi = require("joi");
const { ValidationError } = require("../helpers");

const addContactValidation = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),

    number: Joi.number(),
  });

  const validationResult = await schema.validate(req.body);

  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details[0].message));
  }

  next();
};

module.exports = { addContactValidation };
