const express = require('express');
const router = express.Router();
const findController = require('../controllers/FindController');
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
    findController.getQuestion
);

router.get('/advancedBrowse/:date/:date2',
    findController.advancedBrowse
);


module.exports = router;
