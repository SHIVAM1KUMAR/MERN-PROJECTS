import React from 'react';
import './RegisterPage.css'; // Importing specific CSS for Register Page

const RegisterPage = () => {
  return (
    <div className="registerpage-container">
      <header className="register-hero-section">
        <h1 className="register-hero-title">Book Your Engineering Counselling</h1>
        <p className="register-hero-subtitle">
          Get expert guidance to shape your future in engineering.
        </p>
      </header>

      <section className="register-content-section">
        <div className="content-wrapper">
          <h2 className="section-title">Why Register with Us?</h2>
          <p className="section-description">
            Choosing the right engineering college is a crucial decision that can define your career.
            At <span className="highlight">RealCounselling</span>, we are committed to guiding students through every step 
            of their journey across various engineering disciplines, ensuring they make an informed decision with confidence.
          </p>
          <p className="section-description">
            Our expert counseling services provide you with comprehensive insights into top engineering institutions, 
            admission processes, and career opportunities.
          </p>
        </div>

        <div className="content-wrapper">
          <h2 className="section-title">Courses We Cover</h2>
          <ul className="course-list">
            <li>Computer Science Engineering (CSE)</li>
            <li>Mechanical Engineering (ME)</li>
            <li>Electrical and Electronics Engineering (EEE)</li>
            <li>Civil Engineering (CE)</li>
            <li>Electronics and Communication Engineering (ECE)</li>
            <li>Information Technology (IT)</li>
          </ul>
        </div>

        <div className="content-wrapper">
          <h2 className="section-title">How We Assist You</h2>
          <div className="assist-container">
            <div className="assist-card">
              <h3>Personalized Guidance</h3>
              <p>We evaluate your interests and academic background to suggest the best engineering programs tailored to you.</p>
            </div>
            <div className="assist-card">
              <h3>College Selection</h3>
              <p>Our experts provide curated lists of top colleges that align with your career goals and preferences.</p>
            </div>
            <div className="assist-card">
              <h3>Admission Assistance</h3>
              <p>Step-by-step support throughout the application process, including document preparation and deadlines.</p>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <h2 className="section-title">Register Now</h2>
          <p className="section-description">
            Take the first step towards your dream engineering career by filling out our registration form. Our team will 
            connect with you to provide personalized counseling and expert advice.
          </p>
          <a 
            href="https://docs.google.com/forms/d/1ZPcprgmUf27lMjo79fDJaI7nilm4ftLxZXVIZZLQqJY/edit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="register-btn"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
