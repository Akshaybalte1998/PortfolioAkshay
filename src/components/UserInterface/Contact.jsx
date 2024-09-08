import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Use EmailJS to send email
    emailjs.send(
      'service_bwhv55s',  // Replace with your actual EmailJS Service ID
      'template_b8zkcmg', // Replace with your actual EmailJS Template ID
      formData,          // Form data containing name, email, subject, and message
      'yJBCEfYLLYyRuMnFo'      // Replace with your actual EmailJS User ID
    ).then((result) => {
      alert('Message sent successfully!'); // Success notification
    }, (error) => {
      alert('An error occurred, please try again.'); // Error notification
      console.error('EmailJS Error:', error); // Log the error for debugging
    });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className='p-16xl '>
      <div className="container">
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-4'>Get In Touch</h2>
        <div className="md:flex justify-between items-center">
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full' onSubmit={sendEmail}>
              <div className='mb-5'>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter Your Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                />
              </div>
              <div className='mb-5'>
                <input
                  type="email"
                  name="email"
                  placeholder='Enter Your Email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                />
              </div>
              <div className='mb-5'>
                <input
                  type="text"
                  name="subject"
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                />
              </div>
              <div className='mb-5'>
                <textarea
                  name="message"
                  rows={3}
                  placeholder='Write your Message'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                />
              </div>
              <button
                type="submit"
                className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;