import React from 'react';
import './profession_component.css';
import { FaTrash } from 'react-icons/fa';
const Profession_component = (prop) => {
  const {proffdetail,setprofessiondetail,key}=prop;
  const userid=JSON.parse(localStorage.getItem('detail'))._id;
  const Connecting_url ="http://localhost:3000"
  // const Connecting_url ="https://full-stack-intern-project.onrender.com"
   function deleteprofession(){
   fetch(`${Connecting_url}/deleteprofession`,{
     method:'delete',
     headers:{
       'Content-type':"Application/json"
     },
     body:JSON.stringify({
       professionid:proffdetail._id,
       userid:userid
     })
   }).then((res)=>{
     return res.json();
   }).then((val)=>{
     localStorage.removeItem('detail')
     localStorage.setItem('detail',JSON.stringify(val.detail))
     setprofessiondetail(val.detail.profession)
     console.log('done')
   }).catch((err)=>{
     console.log(err)
   })   
   }
    
  return (
    <div className='profession_component'>
      <div className='profession-details'>
      <button onClick={deleteprofession}><FaTrash /></button>
        <p><strong>Company Name:</strong> {proffdetail.companyName}</p>
        <p><strong>Role:</strong> {proffdetail.role}</p>
        <p><strong>Job Type:</strong> {proffdetail.jobType}</p>
        <p><strong>Start Date:</strong> {proffdetail.startDate}</p>
        <p>
          <strong>End Date:</strong> {proffdetail.isOngoing ? 'Present' : proffdetail.endDate}
        </p>
        
      </div>
    </div>
  );
};

export default Profession_component;
