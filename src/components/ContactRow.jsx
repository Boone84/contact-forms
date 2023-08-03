// eslint-disable-next-line no-unused-vars
import React from 'react';

const ContactRow = ({ contact, setSelectedContactId }) => {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
