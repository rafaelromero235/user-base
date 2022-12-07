

const JwtStrategy = require('passport-jwt').Strategy

const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}
passport.use(
    new JwtStrategy(options, async(tokenDecoded,done)=>{
      //done(error,tokendecoded)
      
        try{
            const user = await findUserById(tokenDecoded.id)
            if (!user){
                return done(null,false)// no existe un error pero tampoco existe el usuario
            }else{
                return done(null,tokenDecoded)//no existe un error pero si un usuario
            }
        }catch(error){
            return done(error,false)//si existe un error pero no un suario
        }
    })
)

module.exports = passport