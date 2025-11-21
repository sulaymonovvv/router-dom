// ContactPage.jsx
import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  return (
    <div className="p-6">
      {contact ? (
        <div className="max-w-md mx-auto border p-4 rounded shadow bg-white">
          <h2 className="text-xl font-bold mb-2">Aloqa Ma'lumotlari</h2>
          <p>
            <strong>Ism:</strong> {contact.name}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Telefon:</strong> {contact.phone}
          </p>
          <p>
            <strong>Manzil:</strong> {contact.address.street},{" "}
            {contact.address.city}
          </p>
          <p>
            <strong>Firma:</strong> {contact.company.name}
          </p>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default ContactPage;
