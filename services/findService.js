const mongoose = require('mongoose');
const Find = require('../models/db/findModel');
const crudRepository = require('../database/crudRepository');

/*
module.exports.findById = async function(userId) {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(userId),
            model: User,
            projection: {
                __v: false
            }
        };
        const responseFromRepository = await crudRepository.findById(data);
        if (responseFromRepository.status) {
            responseObj.status = true;
            responseObj.result = responseFromRepository.result;
        }
    } catch (error){
        console.log('ERROR-userService-findById: ', error);
    }
    return responseObj;
}
*/

module.exports.findAll = async function(dataFromController) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {},
            model: Find,
            projection: {
                __v: false
            }
        };

        const responseFromDatabase = await crudRepository.find(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-userService-findAll: ', error);
    }
    return responseObj;
}

module.exports.findById = async function(id_find) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {_id: mongoose.Types.ObjectId(id_find)},
            model: Find,
            projection: {
                __v: false
            }
        };

        const responseFromDatabase = await crudRepository.find(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-userService-findById: ', error);
    }
    return responseObj;
}

/*
module.exports.create = async function(dataFromController) {
    const responseObj = { status: false };
    try {
        const user = new User(dataFromController);
        const responseFromDatabase = await crudRepository.save(user);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-userService-create: ', error);
    }
    return responseObj;
}

module.exports.update = async function(user) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(user.id)
            },
            model: User,
            projection: {
                __v: false
            },
            updateQuery: {}
        };

        if (user.email) data.updateQuery.email = user.email;
        if (user.firstName) data.updateQuery.firstName = user.firstName;
        if (user.lastName) data.updateQuery.lastName = user.lastName;

        const responseFromDatabase = await crudRepository.findOneAndUpdate(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (e){
        console.log('ERROR-userService-update: ', e);
    }
    return responseObj;
}

module.exports.delete = async function(userId) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(userId)
            },
            model: User,
            projection: {
                __v: false
            }
        };

        const responseFromDatabase = await crudRepository.findOneAndDelete(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-userService-delete: ', error);
    }
    return responseObj;
}
*/
