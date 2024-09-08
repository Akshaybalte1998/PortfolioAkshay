import React from 'react'
import frontendImg from "../../assets/images/front-end.png"

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-smallTextColor font-bold text-2xl mb-5">Education</h2>
        </div>

        {/* Timeline container */}
        <div className="relative flex flex-col justify-center items-center">
          {/* Vertical Line */}
          <div className="absolute w-1 h-full bg-indigo-600 left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline Content */}
          <div className="space-y-12">

            {/* CDAC Card */}
            <TimelineCard
              title="CDAC"
              icon="ri-graduation-cap-fill"
              description="PG-DAC, IACSD, Pune"
              date="March 2024 – August 2024"
              imageSrc={frontendImg}
              animation="fade-left"
            />

            {/* Internship Card */}
            <TimelineCard
              title="Internship"
              icon="ri-robot-2-fill"
              description="Machine Learning Intern, Aiverient, Pune"
              date="June 2022 – February 2023"
              imageSrc={frontendImg}
              animation="fade-right"
            />

            {/* B.Tech Card */}
            <TimelineCard
              title="B.Tech"
              icon="ri-graduation-cap-fill"
              description="Mechanical Engineering, DKTE Textile and Engineering Institute, Ichalkaranji"
              date="2016 – 2020"
              additionalInfo="7.78 CGPA"
              imageSrc={frontendImg}
              animation="fade-left"
            />

            {/* HSC Card */}
            <TimelineCard
              title="HSC"
              description="A.K. Junior College, Atpadi"
              date="2014 – 2016"
              additionalInfo="67.54%"
              imageSrc={frontendImg}
              animation="fade-right"
            />

            {/* SSC Card */}
            <TimelineCard
              title="SSC"
              icon="ri-school-fill"
              description="Shree Bhavnai Vidyalaya, Atpadi"
              date="2014"
              additionalInfo="90.60%"
              imageSrc={frontendImg}
              animation="fade-left"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-center mt-12">
          <h2 className="text-smallTextColor font-bold text-2xl mb-5">Projects</h2>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {/* Project 1 - AgroMart */}
          <ProjectCard
  title="AgroMaart - Online Agriculture Marketplace"
  description="AgroMaart is an online platform designed to connect farmers, buyers, and delivery personnel in a seamless agricultural marketplace. 
  It allows users to browse, purchase, and manage agricultural products and services. Features include real-time order tracking, secure payment 
  processing, location services, and communication through SMS and notifications."
  technologies="React, HTML,CSS , Spring Boot ,Hibernate ,MySql"
  imageSrc={frontendImg}
  animation="fade-right"
/>



          {/* Project 2 - Music Recommendation System */}
          <ProjectCard
            title="Music Recommendation System"
            description="A personalized music recommendation system leveraging user preferences and listening history."
            technologies="Python, Flask, TensorFlow, Spotify API"
            imageSrc={frontendImg}
            animation="fade-left"
          />

          {/* Project 3 - Drug Review Using NLP */}
          <ProjectCard
            title="Drug Review Using NLP"
            description="An analysis tool to interpret and categorize drug reviews using natural language processing."
            technologies="Python, Flask, NLP, TensorFlow"
            imageSrc={frontendImg}
            animation="fade-right"
          />
        </div>
      </div>
    </section>
  )
}

/* Timeline Card Component */
const TimelineCard = ({ title, icon, description, date, additionalInfo, imageSrc, animation }) => (
  <div className="relative flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-0 sm:mb-12">
    <div className="flex justify-start sm:justify-end w-full mx-auto items-center">
      <div className="w-full sm:w-1/2 sm:px-8">
        <div
          data-aos={animation}
          data-aos-duration="1200"
          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
        >
          <h3 className="text-indigo-600 font-bold mb-3 group-hover:text-white text-xl">
            {icon && <i className={`${icon} mr-2`}></i>} {title}
          </h3>
          <p className="text-sm group-hover:text-white">{description}</p>
          {date && <p className="text-sm group-hover:text-white mt-1">{date}</p>}
          {additionalInfo && <p className="text-sm group-hover:text-white mt-1">{additionalInfo}</p>}
        </div>
      </div>
    </div>
    <div className="rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="w-8 h-8" />
    </div>
  </div>
)

/* Project Card Component */
const ProjectCard = ({ title, description, technologies, imageSrc, animation }) => (
  <div className="relative flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-0 sm:mb-12">
    <div className="flex justify-start sm:justify-end w-full mx-auto items-center">
      <div className="w-full sm:w-1/2 sm:px-8">
        <div
          data-aos={animation}
          data-aos-duration="1200"
          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
        >
          <h3 className="text-indigo-600 font-bold mb-3 group-hover:text-white text-xl">
            {title}
          </h3>
          <p className="text-sm group-hover:text-white">{description}</p>
          <p className="text-sm group-hover:text-white mt-1"><b>Technologies:</b> {technologies}</p>
        </div>
      </div>
    </div>
    <div className="rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="w-8 h-8" />
    </div>
  </div>
)

export default Services
