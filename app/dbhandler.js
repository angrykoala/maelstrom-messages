var User=require('./models/user');
var mongoose=require('mongoose');

var dbHandler={
    login: function(userId,done){
        

    },
    getInbox: function(userId,done){


        done();
    },
    getInboxMessage: function(userId,msgId,done){


    },
};

module.exports=dbHandler;
