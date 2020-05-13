const crudRepository = require('../database/crudRepository');
const Question = require('../models/db/questionModel');

module.exports.login = async function(user) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                id_busqueda: user.id_busqueda,
                category: user.category,
                type: user.type,
                difficulty: user.difficulty,
                question: user.question,
                correct_answer: user.correct_answer,
                incorrect_answers: user.incorrect_answers,
            },
            model: Question
        };

        const responseFromDatabase = await crudRepository.findOne(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error) {
        console.log('ERROR-authService-login: ', error);
    }
    return responseObj;
};