const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User")


//convertir a cadena
passport.serializeUser((user,callback)=>{
    callback(null,user._id)
});
// convertir a objeto
passport.deserializeUser(async (id,callback)=>{
    try{
        const user = await  User.findById(id)
        callback(null,user)
    }catch(error){
        console.log("hubo un error deserializeUser")
        callback(error,null)
    }
});


passport.use(
    new LocalStrategy(
        {
            usernameField:"username"
        },
        async (username, password, callback)=>{
            try{
                const user = await User.findOne({ username })
                if(!user){
                    return callback(null,false,{msg:"Incorrect user or password"})
                }
                if(!bcrypt.compareSync(password,user.password)){
                    return callback(null,false,{msg:"Incorrect user ot password"})
                }
                callback(null,user)

            }catch(error){
                callback(error,null)
            }
        }
    )
);

module.exports  = passport