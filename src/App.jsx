import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {
        selectedContactId === null 
          ? <ContactList setSelectedContactId={setSelectedContactId} /> 
          : <div>You selected contact ID: {selectedContactId}</div>
      }
    </div>
  );
}

export default App;
