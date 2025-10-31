import React from 'react';
import Khanda from '../assets/Khanda.webp';
import '../PAGES/Learning.css';

const Learning = () => {
  return (
    <div className="learning-container">
      <div className="learning-hero">
        <img src={Khanda} alt="Khanda" className="learning-khanda" />
        <h1 className="learning-title">Learning with KDLF</h1>
        <p className="learning-subtitle">
          Welcome to our Learning section! Here, young minds explore the teachings of Sikh Gurus, Gurbani, and Sikh history through interactive content, quizzes, and creative activities.
        </p>
      </div>
      <div className="learning-content">
        <section className="learning-section">
          <h2>Shabad & Kavita</h2>
          <p>
            Discover the beauty of Shabad and Kavita. Listen, recite, and learn the meanings behind the sacred verses. Our resources help you connect with Gurbani and understand its timeless wisdom.
          </p>
        </section>
        <section className="learning-section">
          <h2>Quizzes & Activities</h2>
          <p>
            Test your knowledge with fun quizzes on Sikh history, Gurus, and Gurbani. Take part in creative activities like drawing, poetry, and storytelling to express your learning journey.
          </p>
        </section>
        <section className="learning-section">
          <h2>Resources</h2>
          <ul className="learning-list">
            <li><a href="/quizzes">Interactive Quizzes</a></li>
            <li><a href="/about-history">Learn Sikh History</a></li>
            <li><a href="/books">Recommended Books</a></li>
            <li><a href="/keychain-magnets">Keychain & Magnets</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Learning;