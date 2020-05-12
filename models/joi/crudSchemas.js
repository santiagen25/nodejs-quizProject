const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    id: Joi.object({
        id: Joi.objectId().required()
    }),
    fechas: Joi.object({
        date: Joi.date().required(),
        date2: Joi.date().required()
    }),
    create: Joi.object({
        fechaHora: Joi.date().required()
    }),
    update: Joi.object({
        fechaHora: Joi.date().required()
    })
};