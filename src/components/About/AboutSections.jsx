import React from "react";

function AboutSections() {
  const sectionStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };

  const innerCardStyle = {
    width: "80%",
    backgroundColor: "#1e1e2f",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
  };

  const buttonStyle = {
    marginLeft: "10px",
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "5px 10px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#aaa",
    cursor: "not-allowed",
    pointerEvents: "none",
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Education</h3>
          <div>
            <strong>Vellore Institute of Technology</strong>, Chennai (2022 - 2026) – B.Tech (Computer Science and Engineering), GPA: 8.74
            <br />
            <strong>National Defense Academy</strong>, Pune (2020 - 2022) – Bachelor in Science(Computers), GPA: 8.5
            <br />
            <strong>College of Engineering</strong>, Pune (2019 - 2020) – Bachelor of Technology in Electrical Engineering, GPA: 8.3
            <br />
            <strong>Sri Chaitanya Junior College</strong>, Pune (2018 - 2019) – 12th Class, Percentage: 86
            <br />
            <strong>Podar International Schoo</strong>, Pune (2016 - 2017) – 10th Class, Percentage: 94
          </div>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Research Work</h3>
          <p>
            <strong>Smart Home Pet Feeder</strong> – Designed an IoT-enabled feeder using
            Arduino, load cells, ultrasonic sensors, and Wi-Fi for automated and remote
            pet feeding.
          </p>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Experience</h3>
          <p>
            <strong>Sovereign Kraft Enterprises</strong> – Worked in the Industrial Automation and LAN Networking Project of installation and commissioning
for Industrial clients. Also, Worked with the supervision assistance of field design, erection and commissioning of ENMS system
with server to IP Address networking and automation through DCS and PLC to HMI system.

          </p>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Professional Certificate</h3>
          <p>
            <strong>MERN Full Stack Certificate (May 2025)</strong> – Gained practical experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. 
            Covered REST API development, authentication, and deployment best practices.
          </p>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Courses</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li key="react-course">
              <strong>Database and SQL for Python Online (Coursera)</strong>
              <br /><br />
            </li>
            <li key="sql-course">
              <strong>Databases and SQL for Data Science with Python (Coursera)</strong>
              
              <br /><br />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutSections;
