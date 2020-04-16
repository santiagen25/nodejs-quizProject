const jwt = require('jsonwebtoken');

module.exports.validate = (req, res, next) => {
    const responseObj = { status: 400 };

    const bearerHeader = req.headers.authorization;
    if (bearerHeader && bearerHeader.split(' ')[0] === 'Bearer' && bearerHeader.split(' ')[1]) {
        const token = bearerHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.token = decoded;
            next();
        } catch (error) {
            responseObj.message = 'Invalid token';
            console.log('ERROR Invalid Token', error);
            return res.status(responseObj.status).send(responseObj);
        }
    } else {
        responseObj.message = 'Bearer token missing from header';
        console.log('ERROR Missig token');
        return res.status(responseObj.status).send(responseObj);
    }
}