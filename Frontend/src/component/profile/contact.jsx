import React, { useState } from 'react';
import './contact.css';
import Connecting_url from '../../../connection.js'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = (prop) => {
  const {data}=prop
  const [number, setNumber] = useState(data.phone);
  const [address, setaddress] = useState(data.address);
  const [noPresent, setNoPresent] = useState(!(data.phone==null));
  const [addressPresent, setAddressPresent] = useState(!(data.address==null));

  const editNumber = () => {
    setNoPresent(false);
    
  };

  const editAddress = () => {
    setAddressPresent(false);
  };

  function send_contact(page){
    if(page=="address"){
      if(address==""){
        return;
      }
    }
    if(page=="phone"){
      if(number.length!=10){
        return;
      }
    }
    fetch(`${Connecting_url}/${page}`,{
      method:'post',
      headers:{
        'Content-Type':'Application/json'
      },
      body:JSON.stringify({
        id:data._id,
        number:number,
        address:address
      })
    }).then((res)=>{
      return res.json();
    }).then((val)=>{
      localStorage.removeItem('detail');
      localStorage.setItem('detail', JSON.stringify(val.detail));
      setNumber(val.detail.phone)
      setaddress(val.detail.address)
      setNoPresent(true)
      setAddressPresent(true)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='contact'>
      <h2>Contact Information</h2>
      <div className="number-div">
        {noPresent ? (
          <div className="show_number">
            <FaPhoneAlt className="icon" />
           <p>{number}</p>
            <button className='edit_number' onClick={editNumber}>Edit</button>
          </div>
        ) : (
          <div className='save_number'>
            <FaPhoneAlt className="icon" />
            <input type="text" placeholder='Enter Your Phone no' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            <button className='save_number' onClick={()=>{send_contact("phone")}}>Save</button>
          </div>
        )}
      </div>
      <div className="address-div">
        {addressPresent ? (
          <div className="show_address">
            <FaMapMarkerAlt className="icon" />
            <p>{address}</p>
            <button className='edit_address' onClick={editAddress}>Edit</button>
          </div>
        ) : (
          <div className='save_address'>
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder='Enter Your address' value={address} onChange={(e)=>{setaddress(e.target.value)}} />
            <button className='save_address' onClick={()=>{send_contact("address")}}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
