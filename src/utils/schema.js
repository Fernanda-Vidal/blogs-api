const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
});

const schemaUser = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
});

module.exports = {
    schemaLogin,
    schemaUser,
};