import React from 'react'
import { getUpcomingEvents } from '../assets/data';

const UpcomingEvents = () => {
   
  const events = getUpcomingEvents();

  const renderEventCard = (event) => (
    <div key={event.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-500 text-sm">{event.date}</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* School Events */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">School Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {events.school.map(renderEventCard)}
        </div>
      </section>

      {/* Local Community Events */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Local Community Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {events.localCommunity.map(renderEventCard)}
        </div>
      </section>

      {/* Global Events */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Global Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {events.global.map(renderEventCard)}
        </div>
      </section>
    </div>
  );
}

export default UpcomingEvents