module.exports.find = async (data) => {
    let responseObj = { status: false };
    try {
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
        console.log(datas.findQuery);
        const newDates = await datas.model.find(datas.findQuery, datas.projection);

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

