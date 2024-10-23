import React from 'react';
import './Company.css';


const Company = () => {
  return (
    <div className="company-container">
      <div className="company-content">
        <h1>About Us</h1>
        <p className="established"><strong>Established:</strong> 2015</p>
        <p className="motto"><strong>Motto:</strong> "Innovation through Collaboration"</p>
        
        <section className="brief">
          <h2>Company Overview</h2>
          <p>
            We are a leading tech firm, providing cutting-edge solutions in AI, data analytics, and digital transformation.
            Since our inception in 2015, we have grown into a global company with a commitment to driving innovation in
            every sector we operate in.
          </p>
        </section>

        <section className="future">
          <h2>Future Endeavors</h2>
          <p>
            Our goal is to expand our reach by developing sustainable and scalable solutions for businesses worldwide.
            We aim to integrate AI with green technologies to foster a future of clean and efficient energy consumption.
          </p>
        </section>

        <section className="policy">
          <h2>Our Policies</h2>
          <p>
            Our work policies are centered on integrity, diversity, and innovation. We strongly believe in empowering
            individuals and communities through technology. Our corporate social responsibility (CSR) focuses on education
            and environmental sustainability.
          </p>
        </section>

        <section className="more-info">
          <h2>More Information</h2>
          <p>
            At our company, we take pride in delivering exceptional services to our clients across various industries.
            We focus on fostering a culture of growth, inclusion, and technological leadership. We are constantly evolving,
            adapting to market changes, and ensuring that our solutions meet the needs of an ever-changing world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Company;
