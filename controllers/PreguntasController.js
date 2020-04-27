const questionService = require('../services/questionService');

module.exports.getQuestion = async function(req, res) {
    const responseObj = { status: 500, message: 'Internal server error' };
    try {
        const data = {
            skip: parseInt(req.query.skip),
            limit: parseInt(req.query.limit)
        };
        const responseFromService = await questionService.findAll(data);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = 'Question found and inserted in DB successfully';
                responseObj.status = 200;
            } else {
                responseObj.message = 'No data found';
                responseObj.status = 404;
            }
        }
    } catch(error) {
        console.log('ERROR-QuestionsController-findAll: ', error);
    }
    return res.status(responseObj.status).send(responseObj);
}