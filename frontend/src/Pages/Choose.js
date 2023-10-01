import React from 'react';
import '../CSS/Choose.css';
import studentImg from '../assets/images/student.png';
import orgImg from '../assets/images/college.png';
import eduChainImg from '../assets/images/eduChainLogo.png'; // Replace with the actual path to your image
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_API);
  console.log(process.env);
  return (
    <>
      <img src={eduChainImg} alt="EduChain3" className='Choose-header-img' />
      <div className="Choose-container">
        <h1 className='Choose-h1'>Who Are You</h1>
        <div className="Choose-box-container">
          <div className="Choose-box Choose-student" onClick={() => { navigate("/student/login"); }}>
            <img src={studentImg} alt="Student" className='Choose-img' />
            <p>Student</p>
          </div>
          <div className="Choose-box Choose-organization" onClick={() => { navigate("/login/organization"); }}>
            <img src={orgImg} alt="Organization" className='Choose-img' />
            <p>Organization</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
