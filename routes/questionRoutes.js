const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const questionSchemas = require('../models/joi/questionSchemas');
const tokenValidation = require('../middlewares/tokenValidation');

router.get('/list',
    joiSchemaValidation.validate(questionSchemas.getUserListSchema, 'query'),
    questionController.findAll);

router.get('/details/:id',
    joiSchemaValidation.validate(questionSchemas.userIdSchema, 'path'),
    questionController.findById);

router.post('/create',
    // joiSchemaValidation.validate(questionSchemas.createUserSchema, 'body'),
    questionController.create);

router.put('/update/:id',
    joiSchemaValidation.validate(questionSchemas.userIdSchema, 'path'),
    joiSchemaValidation.validate(questionSchemas.updateUserSchema, 'body'),
    questionController.update);

router.delete('/delete/:id',
    joiSchemaValidation.validate(questionSchemas.userIdSchema, 'path'),
    questionController.delete);

module.exports = router;