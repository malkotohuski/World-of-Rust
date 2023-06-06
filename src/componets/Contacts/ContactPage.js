import React, { useState } from 'react';
import axios from 'axios';
import './ContactPage.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/send-email', {
        name,
        email,
        message,
        recipient: 'malkotohuski@gmail.com' // Specify the recipient email address here
      });

      console.log(response.data); // Optional: Handle server response

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error); // Optional: Handle error
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
        </div>
        <div className='massage-row'>
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
