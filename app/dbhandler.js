var User=require('./models/user');
var mongoose=require('mongoose');

var dbHandler={
    getInbox: function(userId,done){


        done();
    }
};

module.exports=dbHandler;
