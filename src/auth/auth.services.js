const checkUserCredentials = require('./auth.controller')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../../config').api.jwtSecret

const postLogin = (req,res)=>{
    const {email,password} = req.body
    if (email&&password){
        checkUserCredentials(email,password)
        .then((data)=>{
            if (data){
                const token= jwt.sign({
                    id:data.id,
                    email:data.email,
                    role:data.role,
                },jwtSecret)
                res.status(200).json({message:'correct credential',token
            })

            }else{
                res.status(401).json({message:'invalid credentials'})
            }
            
        })
        .catch((err)=>{
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'missind data',fields:{
            email:'example@mail.com',
            password:'string'
        }})
    }
}

module.exports= {postLogin}