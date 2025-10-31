import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Group_Photo from "../assets/Group_Photo.jpg";
import "../PAGES/Home.css";

import Komalpreet from "../assets/Komalpreet.jpg";
import Meher from "../assets/Meher.jpg";
import Satinderjeet from "../assets/SatinderJeet.jpg";
import Tejasveer from "../assets/Tejasveer.jpg";
import Gurnadar from "../assets/Gurnadar.jpg";
import Rs1313 from "../assets/Rs1313.jpg";

// Dummy Testimonials Data
const testimonials = [
  {
    quote:
      "Joining Khalsa Di Ladli Fauj has been a truly enriching experience. The community is welcoming, and the focus on Sikhi principles is inspiring. Highly recommend!",
    name: "Tejasveer Singh",
    city: "Punjab, India",
    image: Tejasveer,
  },
  {
    quote:"A genuine feeling of belonging. The 'Fauj' truly feels like a family. It’s amazing to grow spiritually and socially here.",

    name: "SatinderJeet Kaur",
    city: "Punjab, India",
    image: Satinderjeet,
  },
  {
    quote: "ਖਾਲਸਾ ਦੀ ਲਾਡਲੀ ਫੌਜ ਨਾਲ ਜੁੜਨਾ ਮੇਰੇ ਜੀਵਨ ਦਾ ਸਭ ਤੋਂ ਸੁੰਦਰ ਅਨੁਭਵ ਰਿਹਾ। ਇੱਥੇ ਸਿਰਫ਼ ਸਿੱਖੀ ਨਹੀਂ ਸਿਖਾਈ ਜਾਂਦੀ, ਸਗੋਂ ਜੀਊਣ ਦਾ ਢੰਗ ਵੀ ਸਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।",

    name: "Gurnadar Kaur",
    city: "Punjab, India",
    image: Gurnadar,
  },
  {
    quote:
      "ਇਸ ਸੰਗਤ ਨੇ ਮੈਨੂੰ ਆਪਣੀ ਪਹਿਚਾਣ ਨਾਲ ਜੋੜਿਆ ਹੈ। ਹਰ ਇਵੈਂਟ, ਹਰ ਕਿਰਤਨ, ਹਰ ਮਿਲਾਪ ਵਿੱਚ ਇਕ ਨਵੀਂ ਰੂਹਾਨੀ ਤਾਕਤ ਮਿਲਦੀ ਹੈ।",
    name: "Meher Kaur",
    city: "Gujarat, India",
    image: Meher,
  },
  {
    quote:
      "The events are always organized flawlessly, and I've learned so much about our history and heritage. A fantastic platform for the youth!",
    name: "1313 Family",
    city: "Delhi, India",
    image: Rs1313,
  },
  {
    quote:
      "ਇੱਥੇ ਆ ਕੇ ਲੱਗਦਾ ਹੈ ਜਿਵੇਂ ਸਾਰਾ ਸੰਸਾਰ ਇੱਕ ਪਰਿਵਾਰ ਹੈ। ਖਾਲਸਾ ਦੀ ਲਾਡਲੀ ਫੌਜ ਨੇ ਮੇਰੇ ਅੰਦਰ ਗਰਵ, ਪ੍ਰੇਰਨਾ ਤੇ ਵਿਸ਼ਵਾਸ ਭਰ ਦਿੱਤਾ ਹੈ।",
    name: "Komalpreet Singh",
    city: "Bilaspur, India",
    image: Komalpreet,
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.img
        src={Group_Photo}
        alt="Group_Photo"
        className="Group_Img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="msg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <h1>Welcome to Khalsa Di Ladli Fauj</h1>
        <span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            Sat Sri Akal! 🙏 <br />
          </motion.span>
          "Come join our family so bright,<br />
          Where we learn and grow together with pure delight."
        </span>
      </motion.div>

      {/* Stats Section */}
      <div className="stats-section">
        {[
          { number: 150, label: "Active Members" },
          { number: 25, label: "Events Organized" },
          { number: 10, label: "Awards Won" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h2>{stat.number}+</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Events Section */}
      <div className="events-section">
        <motion.div
          className="event-card ongoing"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>Ongoing Events</h2>
          <p>No ongoing events at the moment. Stay tuned!</p>
          <Link
            to="/OngoingEvents?tab=ongoing"
            className="event-btn ongoing-btn"
          >
            View Details
          </Link>
        </motion.div>

        <motion.div
          className="event-card upcoming"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Upcoming Events</h2>
          <p>Exciting events are on the way. Check back soon!</p>
          <Link
            to="/OngoingEvents?tab=upcoming"
            className="event-btn upcoming-btn"
          >
            See What's Next
          </Link>
        </motion.div>

        <motion.div
          className="event-card past"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>Past Events</h2>
          <p>See highlights from our previous gatherings and performances.</p>
          <Link to="/ExploreEvents" className="event-btn past-btn">
            View Gallery
          </Link>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Family's Voice 🗣️
        </motion.h2>
        <div className="testimonials-grid">
          {testimonials.map((testimony, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="quote">"{testimony.quote}"</p>
              <div className="author-info">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="author-img"
                />
                <div>
                  <p className="author-name">
                    <strong>{testimony.name}</strong>
                  </p>
                  <span className="author-city">{testimony.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="join-section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Join Our Journey 🚩</h2>
        <p>Be part of Khalsa Di Ladli Fauj and walk the path of Sikhi with us.</p>
        <Link to="/signup" className="join-btn">Join the Fauj</Link>
      </motion.div>
    </div>
  );
};

export default Home;
