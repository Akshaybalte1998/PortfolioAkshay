import React from 'react';

// Define the styles
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  padding: '2rem',
};

const skillsSectionStyle = {
  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  textAlign: 'center',
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#333',
};

const badgeStyle = {
  margin: '5px',
  display: 'inline-block',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const badgeHoverStyle = {
  ...badgeStyle,
  transform: 'scale(1.1)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const Skills = () => {
  return (
    <section id="Skills" style={{ padding: '4rem', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: '#007396' }}>
          My Skills
        </h2>

        <div style={containerStyle}>
          {/* Frontend Section */}
          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Frontend</h3>
            <div>
              {['JavaScript', 'HTML5', 'CSS3', 'React'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-F7DF1E?style=flat&logo=${skill.toLowerCase()}&logoColor=black`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Backend</h3>
            <div>
              {['Java', 'Node.js', 'CSharp', 'C++'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          {/* MERN Stack Section */}
          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>MERN Stack</h3>
            <div>
              {['MongoDB', 'Express.js', 'React', 'Node.js'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-47A248?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Testing</h3>
            <div>
              {['Selenium', 'JUnit'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-43B02A?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Tools & Platforms</h3>
            <div>
              {['Git', 'GitHub', 'Docker', 'Visual_Studio_Code'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-F05032?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Database</h3>
            <div>
              {['MySQL', 'PostgreSQL', 'NoSQL'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-4479A1?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Cloud & DevOps</h3>
            <div>
              {['AWS', 'Azure', 'Jenkins'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-0078D4?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Operating Systems</h3>
            <div>
              {['Linux', 'Unix', 'Windows', 'Unix_Shell_Scripting'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Frameworks</h3>
            <div>
              {['Spring_Boot', 'Hibernate', 'JDBC', 'JSP', 'Servlets'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>

          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>Web Technologies</h3>
            <div>
              <img
                src="https://img.shields.io/badge/-RESTful_API-007396?style=flat&logo=rest&logoColor=white"
                alt="RESTful API"
                style={badgeStyle}
                onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                onMouseOut={(e) => e.currentTarget.style = badgeStyle}
              />
            </div>
          </div>
          
         

          <div style={skillsSectionStyle}>
  <h3 style={sectionTitleStyle}>Security</h3>
  <div>
    {['Spring_Security'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill}
        style={badgeStyle}
        onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
        onMouseOut={(e) => e.currentTarget.style = badgeStyle}
      />
    ))}
  </div>
</div>

<div style={skillsSectionStyle}>
  <h3 style={sectionTitleStyle}>Methodologies</h3>
  <div>
    {['Agile', 'Scrum'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill}
        style={badgeStyle}
        onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
        onMouseOut={(e) => e.currentTarget.style = badgeStyle}
      />
    ))}
  </div>
</div>

<div style={skillsSectionStyle}>
  <h3 style={sectionTitleStyle}>Microsoft .NET Technologies</h3>
  <div>
    {['ASP.NET_MVC_Core', 'NET_Core', 'ADO.NET', 'CSharp', 'Web_API', 'Entity_Framework'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill}
        style={badgeStyle}
        onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
        onMouseOut={(e) => e.currentTarget.style = badgeStyle}
      />
    ))}
  </div>
</div>



          <div style={skillsSectionStyle}>
            <h3 style={sectionTitleStyle}>PROJECT MANAGEMENT TOOLS</h3>
            <div>
              {['JIRA', 'Postman'].map(skill => (
                <img
                  key={skill}
                  src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
                  alt={skill}
                  style={badgeStyle}
                  onMouseOver={(e) => e.currentTarget.style = badgeHoverStyle}
                  onMouseOut={(e) => e.currentTarget.style = badgeStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
