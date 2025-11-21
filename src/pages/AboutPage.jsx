// AboutPage.jsx
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);

  return (
    <div className="p-6">
      {about && (
        <div className="max-w-md mx-auto border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{about.name}</h2>
          <p>Email: {about.email}</p>
          <p>Company: {about.company.name}</p>
          <p>City: {about.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
