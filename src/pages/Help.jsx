import React from 'react'
import "../styles/help.css";
import ContactForm from '../components/contactForm/Contact-form'
const Help = () => {
  return (
    <div className='container'>
      <div><h1 className='contactUs'>Contact Us</h1>
        <ContactForm />
      </div>
        
    </div>    
  )
}

export default Help
