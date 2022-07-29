const Student = require("./connection").db("schoolDB").collection("Student");

const ObjectID =  require("mongodb").ObjectId;

//ADD
const CreateStudent = async({ name , age, grade,email,password })=>{
    const newStudent = await Student.insertOne({
        name ,
        age,
        grade,
        email,
        password
    });
    return newStudent;
};

//getall
const GetAllStudents = async()=>{
    const allStd = await Student.find();
    return allStd.toArray();
};

//getone
const GetOneStudent = async(id)=>{
    return await Student.findOne ({_id:ObjectID(id)});
}

//update
const UpdateStudent = async(id,{name,age,grade,email,password})=>{
    return Student.replaceOne({_id:ObjectID(id)},{name,age,grade,email,password});
}

//delete
const DeleteOne = async(id)=>{
    return await Student.findOneAndDelete({_id:ObjectID(id)});
};

//login 
const Log = async ({email,password})=>{
    const loginStudent = Student.findOne({email:email , password:password});
    if(loginStudent){
        return loginStudent;
    }
};

module.exports = {
    CreateStudent,
    GetAllStudents,
    GetOneStudent,
    UpdateStudent,
    DeleteOne,
    Log
};