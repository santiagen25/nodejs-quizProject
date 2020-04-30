/*
module.exports.findById = async (data) => {
    let responseObj = { status: false };
    try {
        const docs = await data.model.findById(data._id, data.projection);
        responseObj = {
            result: docs,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-findById: ', error);
    }
    return responseObj;
};
*/

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
        const docs = await datas[0].model.find(datas[0].findQuery, datas[0].projection);
        const docs2 = await datas[1].model.find(datas[1].findQuery, datas[1].projection);
        const allDates = await datas[2].model.find(datas[2].findQuery, datas[2].projection);
        const date1 = new Date(docs[0].fechaHora);
        const date2 = new Date(docs2[0].fechaHora);
        const finalDates = [];

        for(let i = 0; i<allDates.length;i++){
            if(new Date(allDates[i].fechaHora) > date1 && new Date(allDates[i].fechaHora) < date2){
                finalDates.push(allDates[i]);
            }
        }


        responseObj = {
            result: finalDates,
            status: true
        };
    } catch(error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-findDate: ', error);
    }
    return responseObj;
};
