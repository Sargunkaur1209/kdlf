import React from 'react'
import logo from '../assets/Logo.png'
import '../COMPONENTS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave divider removed */}
      <div className="footer-content grid-footer">
        {/* Mission Statement */}
        <div className="footer-info footer-section">
          <img src={logo} alt="KDLF Logo" className="footer-logo" />
          <h3>Khalsa Di Ladli Fauj</h3>
          <p className="footer-mission">To create a world where we share the teachings and good deeds of our Guru Sahibaans.</p>
        </div>
        {/* Quick Links */}
        <div className="footer-links footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/purchase">Buy Merchs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        {/* Important Links */}
        <div className="footer-links footer-section">
          <h4>IMPORTANT</h4>
          <ul>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/about-history">Learn History</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="footer-contact footer-section">
          <h4>CONTACT US</h4>
          <p>Feel free to reach out to us via email.</p>
          <a href="mailto:khalsadiladlifauj1313@gmail.com" className="footer-email">khalsadiladlifauj1313@gmail.com</a>
          <div className="footer-social">
            <a href="mailto:khalsadiladlifauj1313@gmail.com" className="footer-icon" title="Email">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z" stroke="#e9b929" strokeWidth="2"/><path d="M3 7l9 7 9-7" stroke="#e9b929" strokeWidth="2"/></svg>
            </a>
            <a href="https://www.instagram.com/" className="footer-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#e9b929" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#e9b929" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#e9b929"/></svg>
            </a>
            <a href="https://www.youtube.com/" className="footer-icon" title="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#e9b929" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="#e9b929"/></svg>
            </a>
            <a href="https://chat.whatsapp.com/yourcommunitylink" className="footer-icon" title="WhatsApp Community" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#e9b929" strokeWidth="2"/><path d="M7 17c2 1 8 1 10-2s-1-7-4-7-5 2-6 5 0 3 0 3z" stroke="#e9b929" strokeWidth="2" fill="none"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Khalsa Di Ladli Fauj. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
