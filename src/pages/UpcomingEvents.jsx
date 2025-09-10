import React from "react";
import { getUpcomingEvents } from "../assets/data";

const UpcomingEvents = () => {
  const events = getUpcomingEvents();

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{event.date}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* School Events */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">
          🌱 School Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.school.map(renderEventCard)}
        </div>
      </section>

      {/* Local Community Events */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">
          🤝 Local Community Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.localCommunity.map(renderEventCard)}
        </div>
      </section>

      {/* Global Events */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">
          🌍 Global Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.global.map(renderEventCard)}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
