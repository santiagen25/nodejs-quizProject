module.exports.save = async(objToSave) => {
    let responseObj = { status: false };
    try {
        const doc = await objToSave.save();
        responseObj = {
            result: doc,
            status: true
        };
    } catch (error) {
        responseObj.error = error;
        console.log('ERROR-crudRepository-save: ', error);
    }
    return responseObj;
};