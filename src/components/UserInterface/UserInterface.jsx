import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  // Media queries
  const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  const isTabletOrAbove = useMediaQuery({ query: "(min-device-width: 768px)" });
  const isLaptopOrAbove = useMediaQuery({ query: "(min-device-width: 1024px)" });

  return (
    <section className="bg-white text-gray-800 py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-gray-600 font-semibold text-lg mb-2">Hello, Welcome</h5>
            <h1 className="text-gray-900 font-extrabold text-3xl md:text-4xl leading-tight mb-4">
              I am Akshay Balte <br />
              <span className="text-teal-600 text-2xl md:text-3xl">Software Developer</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <a href="#contact">
                <button 
                  className="bg-teal-500 text-white font-semibold flex items-center gap-2 px-5 py-2 rounded-lg border-none cursor-pointer transition-transform duration-300 ease-in hover:bg-teal-400 transform hover:scale-105"
                  aria-label="Hire me"
                >
                  <i className="ri-mail-fill" aria-hidden="true"></i> Hire me
                </button>
              </a>
              <a 
                href="#portfolio" 
                className="text-teal-500 text-lg font-semibold border-b-2 border-teal-500 hover:text-teal-400"
                aria-label="View Portfolio"
              >
                See Portfolio
              </a>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <span className="mr-2"><i className="ri-command-fill" aria-hidden="true"></i></span>
              I build and code full-stack applications with a focus on simplicity and user experience. As a passionate Full Stack Developer, 
              I have strong skills in both front-end and back-end technologies. Known for my hard work and clear communication, I’m dedicated to creating effective and user-friendly software. 
              I thrive in collaborative environments and am eager to use my skills to take on new challenges and drive innovation. 
              Let’s connect and explore how we can work together!
            </p>
            <div className="text-gray-700 text-base md:text-lg">
              <span className="text-teal-500 font-semibold">Contact:</span>
              <div>
                <a 
                  href="mailto:balteakshay1998@gmail.com" 
                  className="text-teal-500 font-semibold hover:text-teal-400"
                  aria-label="Email Akshay Balte"
                >
                  <i className="ri-mail-line" aria-hidden="true"></i> balteakshay1998@gmail.com
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/akshay-balte-developer/" 
                  className="text-teal-500 font-semibold hover:text-teal-400"
                  aria-label="Visit LinkedIn Profile"
                >
                  <i className="ri-linkedin-box-fill" aria-hidden="true"></i> https://www.linkedin.com/in/akshay-balte-developer/
                </a>
              </div>
              <div>
                <a 
                  href="tel:7447686701" 
                  className="text-teal-500 font-semibold hover:text-teal-400"
                  aria-label="Call Akshay Balte"
                >
                  <i className="ri-phone-line" aria-hidden="true"></i> 7447686701
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={heroImage} 
              alt="Portrait of Akshay Balte" 
              className="w-1/2 md:w-2/3 rounded-lg shadow-lg border-4 border-teal-300" 
              style={{ maxWidth: '300px' }} // Adjust image size
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
