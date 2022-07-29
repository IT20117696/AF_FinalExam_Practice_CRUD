import React from 'react';
import StudentList from './StudentList';

function Homepage() {
  return (
    <div>
        <h3>Student Home Page</h3>
        <a href='/studentprofile'>
          <button>Student Profile</button>
        </a> &nbsp; &nbsp; 
        <br /> <br /> <br /> <br />
      <StudentList />
       
    </div>
    
  )
}

export default Homepage;