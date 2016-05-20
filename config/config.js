module.exports={
    port: process.env.PORT || 8082,
    dbUrl: process.env.DBURL ||  "mongodb://localhost:27017/maelstrom_msg"
};
