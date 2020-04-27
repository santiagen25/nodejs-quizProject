const mongoose = require('mongoose');
const Question = require('../models/db/questionModel');
const Find = require('../models/db/findModel');
const questionRepository = require('../database/questionRepository.js');
const axios = require('axios');

module.exports.findAll = async function(dataFromController) {
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
        const responseFromDatabase = await questionRepository.save(find);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }

        //hacemos el insert de pregunta
        console.log(JSON.stringify(response.results).slice(1, -2) + ", \"id_find\": \""+ responseFromDatabase.result._id +"\"}");
        let remodelData = JSON.parse(JSON.stringify(response.results).slice(1, -2) + ", \"id_find\": \""+ responseFromDatabase.result._id +"\"}");
        
        const question = new Question(remodelData);
        responseFromDatabase = await questionRepository.save(question);
        if (responseFromDatabase.status) {
            responseObj.status = true;
            responseObj.result = responseFromDatabase.result;
        }
    } catch (error){
        console.log('ERROR-questionService-create: ', error);
    }
    return responseObj;
}
