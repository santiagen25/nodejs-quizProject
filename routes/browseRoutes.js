const express = require('express');
const router = express.Router();
const findController = require('../controllers/FindController');
const crudSchemas = require('../models/joi/crudSchemas');
const tokenValidation = require('../middlewares/tokenValidation');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const constants = require('../config/constants');



router.get('/listado',
    //tokenValidation.validate,
    findController.findAll
);

router.get('/crud/listado/:id',
    //tokenValidation.validate,
    joiSchemaValidation.validate(crudSchemas.id, constants.requestObj.PATH_PARAMS),
    findController.findById
);

router.delete('/crud/delete/:id',
    //tokenValidation.validate,
    joiSchemaValidation.validate(crudSchemas.id, constants.requestObj.PATH_PARAMS),
    findController.delete
);

router.post('/crud/create',
    //tokenValidation.validate,
    //joiSchemaValidation.validate(userSchemas.create, constants.requestObj.BODY_PARAMS),
    findController.create
);

router.put('/crud/update/:id',
    //tokenValidation.validate,
    joiSchemaValidation.validate(crudSchemas.id, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(crudSchemas.update, constants.requestObj.BODY_PARAMS),
    findController.update
);

router.get('/',
    //tokenValidation.validate,
    //preguntasController.getQuestion
);

router.get('/question',
    //tokenValidation.validate,
    findController.getQuestion
);

router.get('/advancedBrowse/:date/:date2',
    //tokenValidation.validate,
    joiSchemaValidation.validate(crudSchemas.fechas, constants.requestObj.PATH_PARAMS),
    findController.advancedBrowse
);


module.exports = router;
