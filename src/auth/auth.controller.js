
const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPasswprd = comparePassword(password, user.password)
        if (verifyPasswprd) {
            return user
        } else {
            return null
        }

    }
    catch (error) {
        return null

    }


}

module.exports = checkUserCredentials