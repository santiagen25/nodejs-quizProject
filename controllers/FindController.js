const findService = require('../services/findService');

/*
module.exports.findById = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const userId = req.params.id ? req.params.id : req.token.userId;
        const responseFromService = await userService.findById(userId);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = 'User fetched successfully';
                responseObj.status = 200;
            } else {
                responseObj.message = 'User not found';
                responseObj.status = 404;
            }
        }
    } catch(error) {
        console.log('ERROR-userController-findById: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}
*/

module.exports.findAll = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const data = {
            skip: parseInt(req.query.skip),
            limit: parseInt(req.query.limit)
        };
        const responseFromService = await findService.findAll(data);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = 'Find found successfully';
                responseObj.status = 200;
            } else {
                responseObj.message = 'No data found';
                responseObj.status = 404;
            }
        }
    } catch(error) {
        console.log('ERROR-findController-findAll: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.findById = async function(req,res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const id_find = req.params.id;
        const responseFromService = await findService.findById(id_find);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
<<<<<<< HEAD
                responseObj.message = 'Find found successfully by id';
=======
                responseObj.message = 'Found successfully by id';
>>>>>>> 6464ce7180fb2e0eb3a256e608f9e1e5f85a3826
                responseObj.status = 200;
            } else {
                responseObj.message = 'No id found';
                responseObj.status = 404;
            }
        }
    } catch(error) {
        console.log('ERROR-findController-findAll: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.create = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const data = req.body;
        const responseFromService = await findService.create(data);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'Find created successfully';
            responseObj.status = 201;
        }
    } catch(error) {
        console.log('ERROR-findController-create: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.update = async function(req, res) {
    let responseObj = { status: 500, message: 'Internal server error' };
    try {
        const find = req.body;
        find.id = req.params.id;
        const responseFromService = await findService.update(find);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'Find updated successfully';
            responseObj.status = 200;
        }
    } catch(error) {
        console.log('ERROR-findController-update: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.delete = async function(req, res) {
    let responseObj = { status: 500, message: 'Internal server error' };
    try {
        const findId = req.params.id;
        const responseFromService = await findService.delete(findId);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'Find removed successfully';
            responseObj.status = 200;
        }
    } catch(error) {
        console.log('ERROR-findController-delete: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}
