const Users = require('../users/users-model')
const { findBy } = require('../users/users-model');

function validateUserBody(req, res, next) {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(422).json({ message: 'username and password required' })
    } else {
        next()
    }
}

async function checkUserNameFree(req, res, next) {
    try {
        const users = await Users.findBy({ username: req.body.username });
        if (!users.length) {
            next();
        }
        else {
            next({ message: "username taken", status: 422 });
        }
    } catch (err) {
        next(err);
    }
}

async function validateCredentials(req, res, next) {
    try {
        const { username } = req.body;
        const user = await findBy({ username: username });
        if (user.length) {
            req.user = user[0];
            next();
        } else {
            next({
                status: 401,
                message: "invalid credentials1"
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    validateUserBody,
    checkUserNameFree,
    validateCredentials
}