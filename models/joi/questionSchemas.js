const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    QuestionSchema: Joi.object({
        id: Joi.objectId().required()
    }),
    getQuestionListSchema: Joi.object({
        skip: Joi.number().integer().optional(),
        limit: Joi.number().integer().optional()
    }).and('skip', 'limit'),
    createQuestionSchema: Joi.object({
        id_busqueda: Joi.string().alphanum().required(),
        category: Joi.string().alphanum().required(),
        type: Joi.string().alphanum().required(),
        difficulty: Joi.string().alphanum().required(),
        question: Joi.string().alphanum().required(),
        correct_answer: Joi.string().alphanum().required(),
        incorrect_answers: Joi.string(),
    }),
    updateQuestionSchema: Joi.object({
        id_busqueda: Joi.string().alphanum().required(),
        category: Joi.string().alphanum().required(),
        type: Joi.string().alphanum().required(),
        difficulty: Joi.string().alphanum().required(),
        question: Joi.string().alphanum().required(),
        correct_answer: Joi.string().alphanum().required(),
        incorrect_answers: Joi.string(),
    })
};