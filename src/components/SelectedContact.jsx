import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContact();
  }, [selectedContactId]);

  if (!contact) return null;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to contact list</button>
    </div>
  );
};

export default SelectedContact;
