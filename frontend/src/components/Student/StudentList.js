import React, { useState, useEffect } from "react";
import axios from "axios";


function StudentList() {
    const [user, setUser] = useState([]);

    const id = window.localStorage.getItem("Student");

    useEffect(() => {
        axios.get(`http://localhost:8080/student/`).then((res) => {
            if (res.data) {
                setUser(res.data);
          }
        });
      }, []);

  return (
    <div>
       <h3> Student List</h3>

       <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.grade}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default StudentList