import React from 'react';
import './ExploreEvents.css'; // Make sure to create this CSS file
import GroupPhoto from '../assets/Group_Photo.jpg';
import Gaavoh from '../assets/Gaavoh.jpg';
import Gursikhirang from '../assets/Gursikhirang.jpg';

const ExploreEvents = () => {
  const events = [
    {
      id: 1,
      title: "Gurpurab 2024",
      description: "Celebrate Gurpurab 2024 with us! Relive the moments of devotion and community.",
      link: "/events/gurpurab2024",
      // Use a local image as the card cover and link to the Instagram reel provided
      imagePlaceholder: GroupPhoto,
      instagramLink: "https://www.instagram.com/khalsa_di_ladli_fauj1313/reel/DEhqYPZSjl4/?next=%2Fkhalsa_di_ladli_fauj1313%2F"
    },
    {
      id: 2,
      title: "Online Gaavoh Sachi Bani Talent Series",
      description: "Explore the talent and spiritual melodies from our Gaavoh Sachi Bani series.",
      link: "/events/gaavoh-sachi-bani",
      imagePlaceholder: Gaavoh, // Placeholder image
      instagramLink: "https://www.instagram.com/khalsa_di_ladli_fauj1313/reel/DH3foKOziXL/?next=%2Fkhalsa_di_ladli_fauj1313%2F"

    },
    {
      id: 3,
      title: "Gursikhi De Rang Khalsa Di Ladli Fauj Dey Sang",
      description: "A vibrant showcase of Gursikhi culture and spirit with the beloved Khalsa Di Ladli Fauj.",
      link: "/events/gursikhi-de-rang",
      imagePlaceholder: Gursikhirang, // Placeholder image
      instagramLink: "https://www.instagram.com/khalsa_di_ladli_fauj1313/reel/DKhYzaVTL-m/?next=%2Fkhalsa_di_ladli_fauj1313%2F"
    },
    
  ];

  return (
    <div className="explore-events-container">
      <div className="events-hero">
        <h1 className="events-title">Explore Our Events</h1>
        <p className="events-subtitle">
          Journey through our past gatherings and discover upcoming celebrations.
          Each event page features a gallery of cherished memories.
        </p>
      </div>

      <div className="events-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-card-media">
              {event.instagramLink ? (
                <a href={event.instagramLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${event.title} on Instagram`}> 
                  <img src={event.imagePlaceholder} alt={event.title} className="event-card-image" />
                  <div className="play-overlay">
                    <div className="play-circle"><div className="play-triangle"/></div>
                  </div>
                </a>
              ) : (
                <img src={event.imagePlaceholder} alt={event.title} className="event-card-image" />
              )}
            </div>
            <div className="event-card-content">
              <h2 className="event-card-title">{event.title}</h2>
              <p className="event-card-description">{event.description}</p>
              <a href={event.link} className="event-card-link">View Gallery &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreEvents;