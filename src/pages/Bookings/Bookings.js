import React from 'react';
import './Bookings.scss';

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      destination: 'Paris, France',
      dates: 'Jun 15 - Jun 22, 2024',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
      price: 1299,
      type: 'Flight + Hotel'
    },
    {
      id: 2,
      destination: 'Bali, Indonesia',
      dates: 'Jul 10 - Jul 16, 2024',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
      price: 899,
      type: 'Package'
    }
  ];

  return (
    <div className="bookings-page">
      <div className="page-header">
        <h1>My Bookings</h1>
        <p>Manage your travel plans</p>
      </div>

      <div className="container">
        {bookings.length > 0 ? (
          <div className="bookings-list">
            {bookings.map(booking => (
              <div key={booking.id} className="booking-card">
                <div className="booking-image">
                  <img src={booking.image} alt={booking.destination} />
                  <span className={`status-badge ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="booking-content">
                  <h3>{booking.destination}</h3>
                  <div className="booking-details">
                    <div className="detail">
                      <i className="fas fa-calendar"></i>
                      <span>{booking.dates}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-tag"></i>
                      <span>{booking.type}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-dollar-sign"></i>
                      <span>${booking.price}</span>
                    </div>
                  </div>
                  <div className="booking-actions">
                    <button className="btn-primary">View Details</button>
                    <button className="btn-secondary">Cancel Booking</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-suitcase"></i>
            <h2>No bookings yet</h2>
            <p>Start planning your next adventure!</p>
            <button className="explore-btn">Explore Destinations</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
