import React,{useState} from 'react';
import axios from 'axios';

function Register(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [grade,setGrade] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")

    const onSubmit =(e)=>{
        e.preventDefault();
        const newUser = {
            name,
            age,
            grade,
            email,
            password,
            cpassword
        };
        console.log(newUser);
        if(password === cpassword){
            axios.post("http://localhost:8080/student/",newUser).then((res)=>{
                if(res.data){
                    alert("User Registeration success..!!");
                    window.location.href="/";
                }
            });
        }else{
            alert("Password missmarch..!!")
        }
    }

    return (
        <div>
            <h3> Student Registeration </h3>
            <form onSubmit={onSubmit}>
                Name : <input type="text" onChange={(e)=>{ setName(e.target.value)}} required/> <br/><br/>
                Age : <input type="text"  onChange={(e)=>{ setAge(e.target.value)}} required/> <br/><br/>
                Grade : <input type="text" onChange={(e)=>{ setGrade(e.target.value)}} required/> <br/><br/>
                Email : <input type="text" onChange={(e)=>{ setEmail(e.target.value)}} required/> <br/><br/>
                Password : <input type="password" onChange={(e)=>{ setPassword(e.target.value)}} required/> <br/> <br/>
                Confirm Password : <input type="password" onChange={(e)=>{ setCpassword(e.target.value)}} required/> <br/> <br/>
              
                <input type="submit" value="Register"/> &nbsp;
            </form> 
            <br/>
                <a href='/'>
                    <button>User Login</button>
                </a>
        </div>
    )
}
export default Register;