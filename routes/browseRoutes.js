const express = require('express');
const router = express.Router();
const findController = require('../controllers/FindController');
const preguntasController = require('../controllers/PreguntasController');
//const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const userSchemas = require('../models/joi/userSchemas');
//const tokenValidation = require('../middlewares/tokenValidation');


router.get('/listado',
    //tokenValidation.validate,
    findController.findAll
);

router.get('/listado/:id',
    findController.findById
);

router.delete('/delete/:id',
    findController.delete
);

router.post('/create',
    findController.create
);

router.put('/update/:id',
    findController.update
);

router.get('/',
    //preguntasController.getQuestion
);

router.get('/question',
    preguntasController.getQuestion
);

router.get('/advancedBrowse/:date/:date2',
    findController.advancedBrowse
);

/*
router.get('/details/:id?',
    tokenValidation.validate,
    //joiSchemaValidation.validate(userSchemas.userIdSchema, 'path'),
    userController.findById);

router.get('/list',
    joiSchemaValidation.validate(userSchemas.getUserListSchema, 'query'),
    userController.findAll);

router.post('/create', 
    joiSchemaValidation.validate(userSchemas.createUserSchema, 'body'),
    userController.create);

router.put('/update/:id',
    joiSchemaValidation.validate(userSchemas.userIdSchema, 'path'),
    joiSchemaValidation.validate(userSchemas.updateUserSchema, 'body'),
    userController.update);

router.delete('/delete/:id',
    joiSchemaValidation.validate(userSchemas.userIdSchema, 'path'),
    userController.delete);
*/
module.exports = router;
