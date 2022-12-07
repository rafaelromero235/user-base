const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {

    return bcrypt.hashSync(plainPassword,10)
}

const comparePassword = (plainPassword,hashedpassword) =>{

    return bcrypt.compareSync(plainPassword,hashedpassword)
}

module.exports = {hashPassword,comparePassword}
