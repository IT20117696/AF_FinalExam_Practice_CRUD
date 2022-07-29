const Router = require("@koa/router");

const {RegisterStudent, 
       GetAll,
       GetOne,
       DeleteStudent,
       UpdateOne,
       StudentLogin} = require("../api/student.api.js");

const StudentRouter = new Router({
    prefix: "/student",
});

//Add 
StudentRouter.post("/",async(ctx)=>{
    let newStudent = ctx.request.body;
    const studentAdd = await RegisterStudent (newStudent);
    ctx.response.status = 200;
    ctx.body = {success : studentAdd.acknowledged, Message: "Student Added Successfull !!"}
});

//GetAll
StudentRouter.get("/",async(ctx)=>{
    const AllStudent = await GetAll();
    ctx.response.status = 200;
    ctx.body = AllStudent;
});

//getOne
StudentRouter.get("/:id",async(ctx)=>{
    const id = ctx.params.id;
    const oneStudent = await GetOne(id);
    ctx.response.status = 200;
    ctx.body = oneStudent;
});

//update
StudentRouter.put("/:id",async(ctx)=>{
    const id = ctx.params.id;
    let upStudent = ctx.request.body;
    const resStudent = await UpdateOne(id,upStudent);
    ctx.response.status = 200;
    ctx.body = resStudent;
});

//delete
StudentRouter.delete("/:id",async(ctx)=>{
    const id = ctx.params.id;
    const deleteStudent = await DeleteStudent(id);
    ctx.response.status = 200;
    ctx.body = deleteStudent;
});

//login
StudentRouter.post("/login",async(ctx)=>{
    let data = ctx.request.body;
    const logUser = await StudentLogin (data);
    if(logUser){
        ctx.response.status = 200;
        ctx.body = {success : true, token: logUser._id, Message: "Student Login Successfull !!"}
    }
    else{
        ctx.response.status = 400;
        ctx.body = {success : false, Message: "Student Login Unsuccessfull !!"}
    }
    
});
module.exports = StudentRouter;