const mongoose = require("mongoose")

const ReservaScheme = new mongoose.Schema(
    {
      name:{
          type:String
        
      },
      apellido:{
        type:String
      
    },
      telefono:{
          type:Number
      },
      email:{
          type:String,
          unique:true
      },
      date:{
          type:String
      },
      servicio:{
        type:String
    },
    hora:{
        type:String
    }
     
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("reserva", ReservaScheme)