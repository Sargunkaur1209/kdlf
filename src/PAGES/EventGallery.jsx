// src/components/EventGalleryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventGallery.css'; // Create this CSS file too
import I1 from '../assets/I1.jpg';
import I2 from '../assets/I2.jpg';
import I3 from '../assets/I3.jpg';
import I4 from '../assets/I4.jpg';
import I5 from '../assets/I5.jpg';
import I6 from '../assets/I6.jpg';
import I7 from '../assets/I7.jpg';
import I8 from '../assets/I8.jpg';
import I9 from '../assets/I9.jpg';
import I10 from '../assets/I10.jpg';
import I11 from '../assets/I11.jpg';
import I12 from '../assets/I12.jpg';
import I13 from '../assets/I13.jpg';
import I14 from '../assets/I14.jpg';
import I15 from '../assets/I15.jpg';
import I16 from '../assets/I16.jpg';
import I17 from '../assets/I17.jpg';
import I18 from '../assets/I18.jpg';
import I19 from '../assets/I19.jpg';
import I20 from '../assets/I20.jpg';
import I21 from '../assets/I21.jpg';
import I22 from '../assets/I22.jpg';
import I23 from '../assets/I23.jpg';
import I24 from '../assets/I24.jpg';
import I25 from '../assets/I25.jpg';
import I26 from '../assets/I26.jpg';
import I27 from '../assets/I27.jpg';
import I28 from '../assets/I28.jpg';
import I29 from '../assets/I29.jpg';
import I30 from '../assets/I30.jpg';
import G1 from '../assets/G1.jpg';
import G2 from '../assets/G2.jpg';
import G3 from '../assets/G3.jpg';
import G5 from '../assets/G5.jpg';
import G7 from '../assets/G7.jpg';
import G8 from '../assets/G8.jpg';
import G9 from '../assets/G9.jpg';
import G10 from '../assets/G10.jpg';
import G11 from '../assets/G11.jpg';
import G12 from '../assets/G12.jpg';
import G13 from '../assets/G13.jpg';
import G14 from '../assets/G14.jpg';
import G15 from '../assets/G15.jpg';
import G16 from '../assets/G16.jpg';
import G18 from '../assets/G18.jpg';
import G19 from '../assets/G19.jpg';
import G20 from '../assets/G20.jpg';
import G21 from '../assets/G21.jpg';
import G22 from '../assets/G22.jpg';
import G23 from '../assets/G23.jpg';
import G24 from '../assets/G24.jpg';
import G25 from '../assets/G25.jpg';
import G26 from '../assets/G26.jpg';
import G27 from '../assets/G27.jpg';
import G29 from '../assets/G29.jpg';
import G30 from '../assets/G30.jpg';


const EventGalleryPage = () => {
  const { eventId } = useParams(); // Gets the 'gurpurab2024' part from the URL
  const [photos, setPhotos] = useState([]);
  const [eventName, setEventName] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch photos from an API or a structured data source
    // For demonstration, let's simulate fetching
    const fetchEventData = async () => {
      let fetchedPhotos = [];
      let title = '';

      switch (eventId) {
        case 'gurpurab2024':
          title = 'Gurpurab 2024 Celebrations';
          // Simulate loading 30-40 placeholder images
          fetchedPhotos = [
            {
              id: 1,
              src: I1,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 2,
              src: I2, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 3,
              src: I3,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 4,
              src: I4, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 5,
              src: I5,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 6,
              src: I6, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 7,
              src: I7,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 8,
              src: I8, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 9,
              src: I9,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 10,
              src: I10, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 11,
              src: I11,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 12,
              src: I12, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 13,
              src: I13,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 14,
              src: I14, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 15,
              src: I15,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 16,
              src: I16, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 17,
              src: I17,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 18,
              src: I18, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 19,
              src: I19,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 20,
              src: I20, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 21,
              src: I21,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 22,
              src: I22, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 23,
              src: I23,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 24,
              src: I24, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 25,
              src: I25,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 26,
              src: I26, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 27,
              src: I27,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 28,
              src: I28, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 29,
              src: I29,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 30,
              src: I30, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
          ];
          break;
        case 'gaavoh-sachi-bani':
          title = 'Online Gaavoh Sachi Bani Talent Series';
          fetchedPhotos = [
            {
              id: 1,
              src: G1,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 2,
              src: G2, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 3,
              src: G3,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 4,
              src: G3, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 5,
              src: G5,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 6,
              src: G16, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 7,
              src: G7,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 8,
              src: G8, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 9,
              src: G9,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 10,
              src: G10, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 11,
              src: G11,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 12,
              src: G12, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 13,
              src: G13,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 14,
              src: G14, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 15,
              src: G15,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 16,
              src: G16, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 17,
              src: G11,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 18,
              src: G18, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 19,
              src: G19,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 20,
              src: G20, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 21,
              src: G21,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 22,
              src: G22, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 23,
              src: G23,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 24,
              src: G24, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 25,
              src: G25,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 26,
              src: G26, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 27,
              src: G27,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 28,
              src: G2, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
            {
              id: 29,
              src: G29,
              alt: "Gurpurab 2024 Photo 1"
            },
            {
              id: 30,
              src: G30, // fallback to the same image for demo
              alt: "Gurpurab 2024 Photo 2"
            },
          ];
          break;
        // ... add cases for other events
        default:
          title = 'Event Gallery';
          fetchedPhotos = []; // No photos found
          break;
      }
      setEventName(title);
      setPhotos(fetchedPhotos);
    };

    fetchEventData();
  }, [eventId]);

  if (!eventName) {
    return <div className="gallery-loading">Loading event photos...</div>;
  }

  return (
    <div className="event-gallery-container">
      <div className="gallery-hero">
        <h1 className="gallery-title">{eventName}</h1>
        <p className="gallery-subtitle">A collection of cherished moments from our event.</p>
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div className="gallery-item" key={photo.id}>
            <img src={photo.src} alt={photo.alt} loading="lazy" /> {/* lazy loading for performance */}
          </div>
        ))}
        {photos.length === 0 && <p className="no-photos">No photos available for this event yet.</p>}
      </div>
    </div>
  );
};

export default EventGalleryPage;