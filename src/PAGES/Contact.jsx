import React, { useState } from 'react'
import '../PAGES/Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add actual email sending logic here if needed
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have questions or want to join KDLF? Fill out the form below or email us at
        <a href="mailto:khalsadiladlifauj1313@gmail.com" className="contact-email"> khalsadiladlifauj1313@gmail.com</a>
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      {submitted && <div className="contact-success">Thank you for reaching out! We'll get back to you soon.</div>}
    </div>
  )
}

export default Contact
