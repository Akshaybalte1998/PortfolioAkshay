import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  // Define media queries
  const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  const isTabletDevice = useMediaQuery({ query: "(min-device-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-device-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1200px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1201px)" });

  return (
    <section className='pt-0' id="about">
      <div className='container pt-14'>
        {/* Hero left */}

        
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className="w-full md:basis-1/2">
            <h5 className='text-smallTextColor font-[500] text-[16px]'>
              Hello, Welcome
            </h5>
            <h1 className='text-smallTextColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mt-5'>
              I am Akshay Balte <br />
              <p className='text-2xl'>Software Developer</p>
            </h1>
            <div className='flex items-center mt-7 gap-6'>
              <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i className="ri-mail-fill"></i> Hire me
                </button>
              </a>
              <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                See Portfolio
              </a>
            </div>
            <p data-aos="fade-left" data-aos-duration="1500" class="flex text-headingColor items-center mt-12 gap-2 font-[500] leading-5 hover:leading-6 capitalize text-justify sm:pl-14 sm:pr-10 aos-init aos-animate">
              <span class="mr-2 mb-16"><i class="ri-command-fill"></i></span>
              <span>I design and code beautifully simple things, and I love what I do!!Enthusiastic
                 Software Engineering student with a fervor for coding and a solid foundation in machine learning.
                  Distinguished graduate known for hard work, complemented by excellent communication skills</span>
                  
            </p>
            <div class="  gap-4 mt-14">
            <span class="text-smallTextColor text-[18px] font-[600] gap-4">Contact:</span>
            <span><a href="#Email" class="text-smallTextColor text-[18px] font-[600] gap-6 ml-2">
              <i class="ri-mail-line">  balteakshay1998@gmail.com</i></a></span> <br />
            
            <span><a href="https://www.linkedin.com/in/akshay-balte-developer/" class="text-smallTextColor text-[18px] font-[600] ml-16">
            <i class="ri-linkedin-box-fill">https://www.linkedin.com/in/akshay-balte-developer/</i>
            </a></span> <br />
            <span><a href="#Phone no" class="text-smallTextColor text-[18px] font-[600] ml-16">
              <i class="ri-phone-line">7447686701</i></a></span></div>
          </div>
          {/* Hero right (you can add more content here) */}
          <div className="w-full md:basis-1/2">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
