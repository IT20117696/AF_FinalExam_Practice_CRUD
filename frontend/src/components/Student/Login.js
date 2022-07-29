import React, {useState} from 'react';
import axios from 'axios';

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onLog = (e)=>{
        e.preventDefault();
        const userdata = {
            email,
            password
        };
        console.log(userdata);
        axios.post("http://localhost:8080/student/login",userdata).then((res)=>{
            if(res.data.success){
                alert("User Login success..!!");
                window.localStorage.setItem("Student",res.data.token);
                window.location.href = "/home"
             }else{
                alert("Invalid Login")
             }
        }) .catch((e) => {
            console.log(e);
          });
    }

    return (
        <div>
            <h3> User Login </h3>
            <form onSubmit={onLog}>
                Email : <input type="text" onChange={(e)=>{ setEmail(e.target.value)}} required/> <br/><br/>
                Password : <input type="password" onChange={(e)=>{ setPassword(e.target.value)}} required/> <br/> <br/>
               <input type="submit" value="Login" /> &nbsp;
            </form> 
            <br/>
                <a href='/userreg'>
                    <button>User Register</button>
                </a>
        </div>
    )
}
export default Login;