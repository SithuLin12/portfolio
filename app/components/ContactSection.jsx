import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

const ContactSection = () => {
  return (
    <div>
      <h2 className='md:mb-7 mb-2 lg:text-4xl text-2xl font-semibold text-center mt-4'>Contact</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
        <ContactDetails/>
        <ContactForm/>
        </div>
      
    </div>
  )
}

export default ContactSection
