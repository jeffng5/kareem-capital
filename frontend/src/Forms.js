import React, { useState } from 'react';
import {
  FormInput,
  FormGroup,
  FormTextArea,
  Form,
  Segment,
} from 'semantic-ui-react'
import { send } from 'emailjs-com';

const Forms = () => {

    const [toSend, setToSend] = useState([])
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'SERVICE ID',
            'TEMPLATE ID',
            toSend,
            'User ID'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        };
      
    
      const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
      }
    
console.log({toSend})
return (
    <>
 
    <form>
      <div className='equal'>
      <span>
    <h1 className='contact'>Get in Touch</h1>
    </span>
        <span className='equal'>
        <input label='Name' placeholder='name' type='text' value={toSend.from_name} onChange={handleChange}/></span>
        <span>
        <input label='Email' placeholder='email' type='text' value={toSend.email} onChange={handleChange}/></span>
        <span>
        <input label='Subject' placeholder='subject' type='text' value={toSend.subject} onChange={handleChange}/></span>
        <span>
       <textarea rows='7'
       cols = '60'
       name='message' placeholder='Type your message here...' label='About'  type='text' value={toSend.message} onChange={handleChange}></textarea></span>
     
        </div>
      <button onSubmit={onSubmit}>Submit</button>
    </form>
    </>
)
}
export default Forms