
module.exports.find = async (data) => {
    let responseObj = { status: false };
    try {
        //const docs = await data.model.find(data.findQuery, data.projection).skip(data.skip).limit(data.limit);
        const docs = await data.model.find(data.findQuery, data.projection);
        console.log(docs);
        responseObj = {
            result: docs,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-find: ', error);
    }
    return responseObj;
};

module.exports.save = async (objToSave) => {
    let responseObj = { status: false };
    try {
        const doc = await objToSave.save();
        responseObj = {
            result: doc,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-save: ', error);
    }
    return responseObj;
};

module.exports.findOneAndUpdate = async (data) => {
    let responseObj = { status: false };
    try {
        const doc = await data.model.findOneAndUpdate(
                            data.findQuery,
                            data.updateQuery, 
                            {new: true, projection: data.projection, useFindAndModify: false}
                        );
        responseObj = {
            result: doc,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-findOneAndUpdate: ', error);
    }
    return responseObj;
};

module.exports.findOneAndDelete = async (data) => {
    let responseObj = { status: false };
    try {
        const doc = await data.model.findOneAndDelete(data.findQuery, {projection: data.projection});
        responseObj = {
            result: doc,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-findOneAndDelete: ', error);
    }
    return responseObj;
};

module.exports.findDate = async (datas) => {
    let responseObj = { status: false };
    try {
        //datas 0 y 1 tienen las fechas de la url, datas 2 tiene lo necesario para coger todas las datas, con js las filtro según data 0 y 1
        /*const allDates = await datas[2].model.find(datas[2].findQuery, datas[2].projection);
        const date1 = new Date(datas[0]);
        const date2 = new Date(datas[1]);
        const finalDates = [];*/
        console.log(datas.findQuery);
        const newDates = await datas.model.find(datas.findQuery, datas.projection);

        //bien, pero mejoremoslo
        /*for(let i = 0; i<allDates.length;i++){
            if(new Date(allDates[i].fechaHora) > date1 && new Date(allDates[i].fechaHora) < date2){
                finalDates.push(allDates[i]);
            }
        }*/


        responseObj = {
            result: newDates,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-findDate: ', error);
    }
    return responseObj;
};

module.exports.savePregunta = async (objToSave) => {
    let responseObj = { status: false };
    try {
        const doc = await objToSave.save();
        responseObj = {
            result: doc,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-save: ', error);
    }
    return responseObj;
};

