const mongoose = require('mongoose');
const Find = require('../models/db/findModel');
const crudRepository = require('../database/crudRepository');
const Question = require('../models/db/questionModel');
const axios = require('axios');

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
        console.log('ERROR-findService-findAll: ', error);
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
        console.log('ERROR-findService-findById: ', error);
    }
    return responseObj;
}

module.exports.create = async function(dataFromController) {
    const responseObj = { status: false };
    try {
        const find = new Find(dataFromController);
        const responseFromDatabase = await crudRepository.save(find);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-findService-create: ', error);
    }
    return responseObj;
}

module.exports.update = async function(find) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(find.id)
            },
            model: Find,
            projection: {
                __v: false
            },
            updateQuery: {}
        };

        if (find.fechaHora) data.updateQuery.fechaHora = find.fechaHora;

        const responseFromDatabase = await crudRepository.findOneAndUpdate(data);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (e){
        console.log('ERROR-findService-update: ', e);
    }
    return responseObj;
}

module.exports.delete = async function(findId) {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: {
                _id: mongoose.Types.ObjectId(findId)
            },
            model: Find,
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
        console.log('ERROR-findService-delete: ', error);
    }
    return responseObj;
}

module.exports.dateFind = async function(dates) {
    const responseObj = { status: false };
    try {
        console.log(dates[0]);
        console.log(dates[1]);
        const allData = {
            findQuery: {"fechaHora": {$gte: new Date(dates[0]), $lt: new Date(dates[1])}},
            model: Find,
            projection: {
                __v: false
            }
        };

        const datas = allData;

        const responseFromDatabase = await crudRepository.findDate(datas);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-findService-dateFind: ', error);
    }
    return responseObj;
}

module.exports.findAllPreguntas = async function(dataFromController) {
    const responseObj = { status: false };
    
    try {
        const {data:response} = await axios.get('https://opentdb.com/api.php?amount=1');

        //y ahora el insert de busqueda
        var currentdate = new Date(); 
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        const find = new Find({fechaHora: currentdate});
        const responseFromDatabase = await crudRepository.savePregunta(find);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }

        //hacemos el insert de pregunta
        //console.log(JSON.stringify(response.results).slice(1, -2) + ", \"id_find\": \""+ responseFromDatabase.result._id +"\"}");
        let remodelData = JSON.parse(JSON.stringify(response.results).slice(1, -2) + ", \"id_find\": \""+ responseFromDatabase.result._id +"\"}");
        
        const question = new Question(remodelData);
        const responseFromDatabase2 = await crudRepository.savePregunta(question);
        if (responseFromDatabase2.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase2.result;
        }
    } catch (error){
        console.log('ERROR-questionService-create: ', error);
    }
    return responseObj;
}

