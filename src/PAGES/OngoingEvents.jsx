// App.js
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../PAGES/OngoingEvents.css";

export default function EventsApp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get('tab') || 'home';
  const [currentPage, setCurrentPage] = useState(initialTab);

  const ongoingEvents = [
    { name: 'Guru Nanak Dev Ji Gurpurab 2025 PRACTICE', status: 'Active', date: '2025-11-05', lastDate: '2025-10-01' },
  ];

  const upcomingEvents = [
    { name: 'Guru Nanak Dev Ji Gurpurab ', status: 'Upcoming', date: '2025-11-05' },
    { name: 'Guru Teg Bahadur Ji 350 Years Shaheedi Purab', status: 'Upcoming', date: '2025-11-24' },
    { name: 'Guru Gobind Singh Ji Gurpurab', status: 'Upcoming', date: '2025-12-27' },
   { name: 'Shahaadat Di Kahani Week', status: 'Upcoming', date: '2025-12-25' },


  ];

  const HomePage = () => (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="main-title">Event Management</h1>
          <p className="subtitle">Discover and register for amazing events</p>
        </div>
        
        <div className="buttons-grid">
          <button
            onClick={() => setCurrentPage('ongoing')}
            className="event-button ongoing-button"
          >
            <div className="button-content">
              <div className="icon-wrapper ongoing-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h2 className="button-title">Ongoing Events</h2>
              <p className="button-desc">View events happening now</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('upcoming')}
            className="event-button upcoming-button"
          >
            <div className="button-content">
              <div className="icon-wrapper upcoming-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                </svg>
              </div>
              <h2 className="button-title">Upcoming Events</h2>
              <p className="button-desc">Explore future events</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const EventsTable = ({ events, title, statusClass }) => (
    <div className="page-container">
      <div className="table-container">
        <button
          onClick={() => setCurrentPage('home')}
          className="back-button"
        >
          ← Back to Home
        </button>

        <div className="table-card">
          <div className="table-header">
            <h1 className="table-title">{title}</h1>
          </div>

          <div className="table-wrapper">
            <table className="events-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Status</th>
                  <th>Date of Event</th>
                  <th>Last Date to Register</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td className="event-name">{event.name}</td>
                    <td>
                      <span className={`status-badge ${statusClass}`}>
                        {event.status}
                      </span>
                    </td>
                    <td>{event.date}</td>
                    <td>{event.lastDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'home') {
    return <HomePage />;
  } else if (currentPage === 'ongoing') {
    return (
      <EventsTable 
        events={ongoingEvents} 
        title="Ongoing Events" 
        statusClass="status-ongoing"
      />
    );
  } else if (currentPage === 'upcoming') {
    return (
      <EventsTable 
        events={upcomingEvents} 
        title="Upcoming Events" 
        statusClass="status-upcoming"
      />
    );
  }
}
