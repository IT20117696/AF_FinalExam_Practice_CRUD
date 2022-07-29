const {MongoClient} = require("mongodb");

const client = new MongoClient ("mongodb+srv://Sajani:*sajani0729@affinalexam.byvvm.mongodb.net/test",{
   useNewUrlParser: true,
   useUnifiedTopology:true,
});

client.connect((err)=>{
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB")
})

module.exports = client;