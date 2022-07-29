const koa = require("koa");
const bodyParser = require ("koa-bodyparser");
const cors = require ("@koa/cors");
const MongoClient = require("./dal/connection.js");
const StudentRouter = require("./routes/student.routes.js");
const app = new koa();

app.use(bodyParser())
app.use(cors())

app.use(StudentRouter.routes()).use(StudentRouter.allowedMethods())

app.listen(8080,()=>{
    console.log("App is running on Port 8080")
});