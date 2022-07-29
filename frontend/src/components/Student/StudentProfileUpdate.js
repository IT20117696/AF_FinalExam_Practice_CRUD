import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudentProfileUpdate() {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [grade,setGrade] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        axios.get(`http://localhost:8080/student/${id}`).then((res) => {
          if (res.data) {
            setName(res.data.name);
            setAge(res.data.age);
            setGrade(res.data.grade);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setCpassword(res.data.password);
          }
        });
      }, []);

      const onUpdate = (e) => {
        e.preventDefault();
      
        const upUser = {
            name,
            age,
            grade,
            email,
            password,
          };

          if (password === cpassword) {
            axios.put(`http://localhost:8080/student/${id}`, upUser).then((res) => {
              if (res.data) {
                alert("Update successful....!");
                window.location.href = "/studentprofile";
              }
            });
          } else {
            alert("Password miss Match...!");
          }
        };

  return (
    <div>
      <h3>User Update</h3>
      <form onSubmit={onUpdate}>
             Name : <input type="text" value={name} onChange={(e)=>{ setName(e.target.value)}} /> <br/><br/>
             Age : <input type="text"  value={age} onChange={(e)=>{ setAge(e.target.value)}} /> <br/><br/>
             Grade : <input type="text" value={grade} onChange={(e)=>{ setGrade(e.target.value)}} /> <br/><br/>
             Email : <input type="text" value={email} onChange={(e)=>{ setEmail(e.target.value)}} /> <br/><br/>
             Password : <input type="text" value={password} onChange={(e)=>{ setPassword(e.target.value)}} /> <br/> <br/>
             Confirm Password : <input type="text" value={cpassword} onChange={(e)=>{ setCpassword(e.target.value)}} /> <br/> <br/>
           
             <br />
             <input type="submit" value="Update" /> &nbsp;   
      </form>
    </div>
  )
}

export default StudentProfileUpdate;