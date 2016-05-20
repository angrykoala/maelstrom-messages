var User = require('./models/user');
var mongoose = require('mongoose');


var userid = mongoose.Types.ObjectId();



var dbHandler = {
	login: function(userId, done) {
		var u = new User({
			_id: userId,
			inbox: [],
			sent: []
		});
		u.save();
		done();
	},
	getInbox: function(userId, done) {
		User.findById({
			_id: userId
		}, function(err, res) {
			done(err, res.inbox);
		});
	},
	getInboxMessage: function(userId, msgId, done) {
		User.findById({
			_id: userId
		}, function(err, res) {
			done(err, res.inbox.id(msgId));
		});
	},
};

dbHandler.login(userid, function(err, res) {
	dbHandler.getInbox(userid, function(err, res) {
		console.log(res);
	});

});


module.exports = dbHandler;