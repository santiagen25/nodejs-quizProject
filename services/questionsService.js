const mongoose = require('mongoose');
const Question = require('../models/db/questionModel');
const crudRepository = require('../database/crudRepository');

module.exports.findById = async function(questionId) {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(userId),
            model: Question,
            projection: {
                __v: false
            }
        };
        const responseFromRepository = await crudRepository.findById(data);
        if (responseFromRepository.status) {
            responseObj.status = true;
            responseObj.result = responseFromRepository.result;
        }
    } catch (error) {
        console.log('ERROR-userService-findById: ', error);
    }
    return responseObj;
}

module.exports.findAll = async function() {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {},
            model: Question,
            projection: {
                __v: false
            }
        };

        if (dataFromController.skip && dataFromController.limit) {
            data.skip = dataFromController.skip;
            data.limit = dataFromController.limit;
        }

        const responseFromDatabase = await crudRepository.find(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error) {
        console.log('ERROR-userService-findAll: ', error);
    }
    return responseObj;
}

module.exports.create = async function() {
    const responseObj = { status: false };
    try {
        const user = new Question(dataFromController);
        const responseFromDatabase = await crudRepository.save(user);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error) {
        console.log('ERROR-userService-create: ', error);
    }
    return responseObj;
}

module.exports.update = async function() {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(user.id)
            },
            model: Question,
            projection: {
                __v: false
            },
            updateQuery: {}
        };

        /*if (user.email) data.updateQuery.email = user.email;
        if (user.firstName) data.updateQuery.firstName = user.firstName;
        if (user.lastName) data.updateQuery.lastName = user.lastName;
*/

        if (user.id_busqueda) data.updateQuery.id_busqueda = user.id_busqueda;
        if (user.category) data.updateQuery.category = user.category;
        if (user.type) data.updateQuery.type = user.type;
        if (user.difficulty) data.updateQuery.difficulty = user.difficulty;
        if (user.question) data.updateQuery.question = user.question;
        if (user.correct_answer) data.updateQuery.correct_answer = user.correct_answer;
        if (user.incorrect_answers) data.updateQuery.incorrect_answers = user.incorrect_answers;


        const responseFromDatabase = await crudRepository.findOneAndUpdate(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (e) {
        console.log('ERROR-userService-update: ', e);
    }
    return responseObj;
}

module.export.delete = async function() {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(userId)
            },
            model: Question,
            projection: {
                __v: false
            }
        };

        const responseFromDatabase = await crudRepository.findOneAndDelete(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error) {
        console.log('ERROR-userService-delete: ', error);
    }
    return responseObj;
}