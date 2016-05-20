var mongoose = require('mongoose');
var message=require('./message');

var userSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    inbox: {
        type: [message]
        //required: true
    },
    sent: {
        type: [message]
        //required: true,
    }
});


module.exports=mongoose.model("User", userSchema);
