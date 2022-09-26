const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
});

const schemaUser = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
    image: Joi.string(),
});

const schemaPost = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
    categoryIds: Joi.array().items(Joi.number()),
});

module.exports = {
    schemaLogin,
    schemaUser,
    schemaPost,
};