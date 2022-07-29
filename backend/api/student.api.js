const {CreateStudent,
       GetAllStudents,
       GetOneStudent, 
       DeleteOne,
       UpdateStudent,
       Log } = require("../dal/student.dal.js");

//add
const RegisterStudent = async ({ name, age, grade,email,password  })=> {
    const newStudent = {
        name,
        age,
        grade,
        email,
        password
    }
    return await CreateStudent(newStudent)
};

//getall
const GetAll = async()=>{
    return await GetAllStudents();
}

//getOne
const GetOne = async(id)=>{
    return await GetOneStudent(id);
}

//update
const UpdateOne = async(id,{name, age, grade,email,password })=>{
    return await UpdateStudent(id,{name, age, grade,email,password });
}

//delete
const DeleteStudent = async(id)=>{
    return await DeleteOne(id);
}

//login
const StudentLogin = async ({email,password})=>{
    const data = {email,password}
    return await Log(data)
}

module.exports = {
    RegisterStudent,
    GetAll,
    GetOne,
    UpdateOne,
    DeleteStudent,
    StudentLogin
};