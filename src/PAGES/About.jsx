import React from 'react'
import GroupPhoto from '../assets/Group_Photo.jpg'
import '../PAGES/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About KDLF</h1>
        <p className="about-subtitle">
          KDLF is a vibrant community of young kids who passionately sing <b>Shabad</b> and <b>Kavita</b>, staying deeply connected to the roots of <b>Gurbani</b> and Sikh heritage. Our mission is to nurture spiritual growth, creativity, and a sense of belonging among the youth, while celebrating the timeless wisdom of Gurbani through music and poetry.
        </p>
      </div>
      <div className="about-content">
        <img src={GroupPhoto} alt="KDLF Group" className="about-group-photo" />
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We aim to inspire the next generation to embrace Sikh values, express themselves through Gurbani, and build lifelong friendships rooted in faith and culture. Through regular gatherings, performances, and learning sessions, KDLF provides a joyful and supportive environment for every child.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
