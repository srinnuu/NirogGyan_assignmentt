import React from "react";

function DoctorProfile({ doctor, onBook, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 underline text-blue-600">← Back</button>
      <div className="border p-4 rounded shadow">
        <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <p className={doctor.available ? "text-green-600" : "text-red-600"}>
          {doctor.available ? "Available" : "Not Available"}
        </p>
        <button onClick={onBook} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;
