import React, { useState } from "react";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import AppointmentForm from "./components/AppointmentForm";
import doctorsData from "./doctors.json";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [booking, setBooking] = useState(false);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Doctors Appointments</h1>
      {!selectedDoctor && (
        <DoctorList doctors={doctorsData} onSelect={setSelectedDoctor} />
      )}
      {selectedDoctor && !booking && (
        <DoctorProfile doctor={selectedDoctor} onBook={() => setBooking(true)} onBack={() => setSelectedDoctor(null)} />
      )}
      {booking && (
        <AppointmentForm doctor={selectedDoctor} onBack={() => setBooking(false)} />
      )}
    </div>
  );
}

export default App;
