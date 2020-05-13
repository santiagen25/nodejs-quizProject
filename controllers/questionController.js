const userService = require('../services/questionService');
const questionsService = require('../services/questionsService');

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
    } catch (error) {
        console.log('ERROR-userController-findById: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.findAll = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const data = {
            skip: parseInt(req.query.skip),
            limit: parseInt(req.query.limit)
        };
        const responseFromService = await userService.findAll(data);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = 'Users fetched successfully';
                responseObj.status = 200;
            } else {
                responseObj.message = 'No users found';
                responseObj.status = 404;
            }
        }
    } catch (error) {
        console.log('ERROR-userController-findAll: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.create = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const data = req.body;
        const responseFromService = await questionsService.create(data);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'User created successfully';
            responseObj.status = 201;
        }
    } catch (error) {
        console.log('ERROR-userController-create: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.update = async function(req, res) {
    let responseObj = { status: 500, message: 'Internal server error' };
    try {
        const user = req.body;
        user.id = req.params.id;
        const responseFromService = await userService.update(user);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'User updated successfully';
            responseObj.status = 200;
        }
    } catch (error) {
        console.log('ERROR-userController-update: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.delete = async function(req, res) {
    let responseObj = { status: 500, message: 'Internal server error' };
    try {
        const userId = req.params.id;
        const responseFromService = await userService.delete(userId);
        if (responseFromService.status) {
            responseObj.body = responseFromService.result;
            responseObj.message = 'User removed successfully';
            responseObj.status = 200;
        }
    } catch (error) {
        console.log('ERROR-userController-delete: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}