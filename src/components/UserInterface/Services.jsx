import React from 'react';
import frontendImg from "../../assets/images/front-end.png";

const Services = () => {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        {/* Education Section */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Education</h2>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine}></div>

          <div style={styles.timelineContent}>
            <TimelineCard
              title="CDAC"
              icon="ri-graduation-cap-fill"
              description="PG-DAC, IACSD, Pune"
              date="March 2024 – August 2024"
              imageSrc={frontendImg}
              animation="fade-left"
            />
            <TimelineCard
              title="Internship"
              icon="ri-robot-2-fill"
              description="Machine Learning Intern, Aiverient, Pune"
              date="June 2022 – February 2023"
              imageSrc={frontendImg}
              animation="fade-right"
            />
            <TimelineCard
              title="B.Tech"
              icon="ri-graduation-cap-fill"
              description="Mechanical Engineering, DKTE Textile and Engineering Institute, Ichalkaranji"
              date="2016 – 2020"
              additionalInfo="7.78 CGPA"
              imageSrc={frontendImg}
              animation="fade-left"
            />
            <TimelineCard
              title="HSC"
              icon="ri-school-fill" 
              description="A.K. Junior College, Atpadi"
              date="2014 – 2016"
              additionalInfo="67.54%"
              imageSrc={frontendImg}
              animation="fade-right"
            />
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
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Projects</h2>
        </div>

        <div style={styles.projectsContainer}>
          <ProjectCard
            title="AgroMaart - Online Agriculture Marketplace"
            description="AgroMaart is an online platform designed to connect farmers, buyers, and delivery personnel in a seamless agricultural marketplace. It allows users to browse, purchase, and manage agricultural products and services. Features include real-time order tracking, secure payment processing, location services, and communication through SMS and notifications."
            technologies="React, HTML, CSS, Spring Boot, Hibernate, MySQL"
            imageSrc={frontendImg}
            animation="fade-right"
          />
          <ProjectCard
            title="Music Recommendation System"
            description="A personalized music recommendation system leveraging user preferences and listening history."
            technologies="Python, Flask, TensorFlow, Spotify API"
            imageSrc={frontendImg}
            animation="fade-left"
          />
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
  );
}

/* Timeline Card Component */
const TimelineCard = ({ title, icon, description, date, additionalInfo, imageSrc, animation }) => (
  <div style={styles.cardContainer}>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
    <div style={styles.cardContent}>
      <div
        data-aos={animation}
        data-aos-duration="1200"
        style={styles.timelineCard}
      >
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`}></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {date && <p style={styles.cardDate}>{date}</p>}
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  </div>
)

/* Project Card Component */
const ProjectCard = ({ title, description, technologies, imageSrc, animation }) => (
  <div style={styles.projectCardContainer}>
    <div style={styles.projectCardContent}>
      <div
        data-aos={animation}
        data-aos-duration="1200"
        style={styles.projectCard}
      >
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDescription}>{description}</p>
        <p style={styles.cardTechnologies}><b>Technologies:</b> {technologies}</p>
      </div>
    </div>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
  </div>
)

/* CSS-in-JS Styles */
const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#f1f5f9',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  sectionTitle: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  timelineContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  timelineLine: {
    position: 'absolute',
    width: '3px',
    height: '100%',
    backgroundColor: '#3b82f6',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  timelineContent: {
    marginTop: '3rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  projectsContainer: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  cardContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  timelineCard: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease-in',
    cursor: 'pointer',
  },
  projectCardContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
  },
  projectCardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    color: '#3b82f6',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.25rem',
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: '#374151',
  },
  cardDate: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem',
  },
  cardAdditionalInfo: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem',
  },
  cardTechnologies: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem',
  },
  iconContainer: {
    backgroundColor: '#3b82f6',
    border: '2px solid #ffffff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: '24px',
    height: '24px',
  },
};

export default Services;
