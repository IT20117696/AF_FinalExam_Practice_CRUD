import React,{useEffect, useState} from 'react';
import axios from 'axios';

function StudentProfile() {
    const [user, setUser] = useState([]);
    
    //get data
    const id = window.localStorage.getItem("Student");
    useEffect(()=>{
        axios.get(`http://localhost:8080/student/${id}`).then((res)=>{
            if (res.data) {
                setUser(res.data);
              }
        });
    },[]);
    
    //logout
    const onLogOut = () => {
        if (window.confirm("Are you sure to Log out?")) {
          window.localStorage.removeItem("Student");
          window.location.href = "/";
        }
      };
    
    //delete
    const onDelete = () => {
        if (window.confirm("Are you sure to Dlete Account?")) {
          axios.delete(`http://localhost:8080/student/${id}`).then((res) => {
            if (res.data) {
              alert("Delete Success...!");
              window.location.href = "/";
            }
          });
        }
      };

    const onRedirect = () => {
        window.location.href = `/update/${id}`;
      };

    console.log(user)

  return (
    <div>
      <h3>User Profile</h3>
      name :  {user.name}   <br /><br />
      age :   {user.age}    <br /><br />
      grade : {user.grade}  <br /><br />
      email : {user.email}  <br /><br />
     
       <button onClick={() => {onRedirect();}}> Update Profile </button> &nbsp;
       <button onClick={onDelete}> Delete Account</button>&nbsp;
       <button onClick={onLogOut}> LogOut</button>
       <br /><br />
      <hr />
    </div>
   
  )
}

export default StudentProfile