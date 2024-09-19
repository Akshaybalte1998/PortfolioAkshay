import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#12141e] to-[#1b1e29] py-12'>
      {/* Top section with quote and call to action */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Left: Quote and Button */}
          <div className="text-center sm:text-left w-full sm:w-1/2">
            <h4 className='text-3xl sm:text-4xl lg:text-5xl text-white font-bold italic tracking-wide leading-snug mb-5'>
              ॥ अंतः अस्ति प्रारंभ ॥
            </h4>
            <a href="#contact">
              <button className='bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 py-2 px-6 rounded-lg shadow-md'>
                <i className="ri-mail-fill"></i> Hire Me
              </button>
            </a>
          </div>

          {/* Right: Address and Social Links */}
          <div className='text-center sm:text-right w-full sm:w-1/2'>
            <p className='text-gray-300 text-lg leading-7 mb-4'>
              Katraj, Pune <br /> Pincode: 411003
            </p>

            <div className='flex justify-center sm:justify-end gap-4 mt-6'>
              <span className='text-gray-300 text-sm font-medium'>
                Follow Me:
              </span>
              <a href="https://www.linkedin.com/in/akshay-balte-developer/" className='w-10 h-10 bg-gray-800 hover:bg-pink-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="https://github.com/Akshaybalte1998" className='w-10 h-10 bg-gray-800 hover:bg-pink-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-github-fill"></i>
              </a>
              <a href="#insta" className='w-10 h-10 bg-gray-800 hover:bg-pink-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='mt-10'>
          <ul className='flex justify-center gap-6 sm:gap-10'>
            <li>
              <a href="#about" className='text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300'>
                About
              </a>
            </li>
            <li>
              <a href="#services" className='text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300'>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className='text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300'>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className='text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300'>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className='text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section with name and copyright */}
      <div className='bg-[#1b1e29] py-6 mt-10'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Logo and Name */}
            <div className="hidden sm:flex items-center gap-3">
              <span className="w-10 h-10 bg-pink-500 text-white text-lg font-medium rounded-full flex items-center justify-center">
                AB
              </span>
              <div className='leading-tight'>
                <h2 className='text-xl text-gray-300 font-bold'>Akshay</h2>
                <p className='text-gray-300 text-base'>Balte</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm sm:text-base text-center sm:text-right mt-4 sm:mt-0">
              © 2024 Akshay Balte. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
