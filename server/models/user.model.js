const {Schema,model} = require("mongoose");
const validator = require("validator");

require("dotenv").config()

const userSchema = Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    firstname:{
        type:String,
        maxLength : 100,
        default : '',
        trim : true
    },
    lastname:{
        type:String,
        maxLength : 100,
        default : '',
        trim : true
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const User = model("User",userSchema);


module.exports = { User };
