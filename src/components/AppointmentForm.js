import React, { useState } from "react";

function AppointmentForm({ doctor, onBack }) {
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div>
        <p className="text-green-600 mb-4">Appointment confirmed with Dr. {doctor.name}</p>
        <button onClick={onBack} className="underline text-blue-600">← Back to profile</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} required className="block w-full mb-2 p-2 border" />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="block w-full mb-2 p-2 border" />
      <input name="datetime" type="datetime-local" onChange={handleChange} required className="block w-full mb-4 p-2 border" />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Confirm</button>
    </form>
  );
}

export default AppointmentForm;
