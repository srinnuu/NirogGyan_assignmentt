import React, { useState } from "react";

function DoctorList({ doctors, onSelect }) {
  const [query, setQuery] = useState("");

  const filtered = doctors.filter(doc => 
    doc.name.toLowerCase().includes(query.toLowerCase()) || 
    doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search doctors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((doc, idx) => (
          <div key={idx} className="border p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => onSelect(doc)}>
            <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-full mb-2" />
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p>{doc.specialization}</p>
            <p className={doc.available ? "text-green-600" : "text-red-600"}>
              {doc.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
