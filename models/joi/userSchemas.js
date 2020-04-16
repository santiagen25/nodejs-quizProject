const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    userIdSchema: Joi.object({
        id: Joi.objectId().required()
    }),
    getUserListSchema: Joi.object({
        skip: Joi.number().integer().optional(),
        limit: Joi.number().integer().optional()
    }).and('skip', 'limit'),
    createUserSchema: Joi.object({
        email: Joi.string().email().required(),
        firstName: Joi.string().alphanum().required(),
        lastName: Joi.string().alphanum().required()
    }),
    updateUserSchema: Joi.object({
        email: Joi.string().email().optional(),
        firstName: Joi.string().alphanum().optional(),
        lastName: Joi.string().alphanum().optional()
    })
};