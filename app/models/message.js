var mongoose = require('mongoose');

// define the schema for our user model
var messageSchema = mongoose.Schema({
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true
	},
    body: {
        type: String,
        required: true
    }
});


// create the model for users and expose it to our app
//module.exports=mongoose.model(dbConfig.schema.user, userSchema);
module.exports=messageSchema;
