const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(5).required(),
});

module.exports = schemaLogin;