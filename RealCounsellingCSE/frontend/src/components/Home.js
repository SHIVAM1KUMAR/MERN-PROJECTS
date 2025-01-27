import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Real-Counselling</h1>
        <p className="hero-subtitle">
          Your journey to academic excellence starts here. Let us guide you toward a brighter future.
        </p>
       





      </header>

      <section className="content-section">
        <h2>Why People Choose Us</h2>

        <p>
          At <strong>RealCounselling</strong>, we go beyond just providing guidance – we pave the way for your future 
          with tailored solutions that cater to your unique ambitions and dreams. Our platform bridges the gap 
          between your potential and the right opportunities, making your journey towards academic and career 
          success seamless and rewarding.
        </p>

        <div className="feature">
          <h3>🚀 Expert Guidance</h3>
          <p>
            Our team of seasoned professionals offers in-depth insights and personalized advice 
            based on years of experience in career counseling and academic planning. 
            Whether you're exploring engineering, management, or creative fields, we have you covered.
          </p>
        </div>

        <div className="feature">
          <h3>🌐 Comprehensive Resources</h3>
          <p>
            Gain access to an extensive database of top universities, trending courses, and future career 
            trends. We help you stay ahead in the competitive landscape with well-researched information 
            and the latest updates in education.
          </p>
        </div>

        <div className="feature">
          <h3>🤝 Personalized Approach</h3>
          <p>
            Every student is unique, and so is our approach. Our tailored solutions ensure that your academic 
            and career goals are aligned perfectly with your strengths and aspirations.
          </p>
        </div>

        <div className="feature">
          <h3>📈 Proven Success</h3>
          <p>
            Thousands of students have already achieved their dreams with RealCounselling. 
            Our track record of successful admissions and career transformations stands as a testament 
            to our commitment and excellence.
          </p>
        </div>

        <p className="closing-statement">
          Choosing <strong>RealCounselling</strong> means choosing a brighter future. Let us be your trusted partner 
          in navigating the complexities of career decisions. Together, we'll achieve success!
        </p>
      </section>

      <footer className="footer">
        <p>Empowering dreams, one step at a time.</p>
      </footer>
    </div>
  );
};

export default HomePage;
