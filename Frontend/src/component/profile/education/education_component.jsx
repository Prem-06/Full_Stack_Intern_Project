import React, { useState } from 'react';
import './education_component.css';
import { FaTrash } from 'react-icons/fa';
const Education_component = (props) => {
 const {details,seteducation}=props;
 const userid=JSON.parse(localStorage.getItem('detail'))._id;
 const Connecting_url ="http://localhost:3000"
 // const Connecting_url ="https://full-stack-intern-project.onrender.com"
  function deleteeducation(){
  fetch(`${Connecting_url}/deleteeducation`,{
    method:'delete',
    headers:{
      'Content-type':"Application/json"
    },
    body:JSON.stringify({
      educationid:details._id,
      userid:userid
    })
  }).then((res)=>{
    return res.json();
  }).then((val)=>{
    localStorage.removeItem('detail')
    localStorage.setItem('detail',JSON.stringify(val.detail))
    seteducation(val.detail.education)
    console.log('done')
  }).catch((err)=>{
    console.log(err)
  })   
  }

  return (
    <div className='education_component'>
        <div className='education-details'>
        <button onClick={deleteeducation}><FaTrash /></button>
          <p><strong>Institute Name:</strong> {details.institute}</p>
          <p><strong>Degree:</strong> {details.degree}</p>
          <p><strong>Starting Date:</strong> {details.start}</p>
          <p><strong>Ending Date:</strong> {details.end}</p>
        </div>
    </div>
  );
};

export default Education_component;
