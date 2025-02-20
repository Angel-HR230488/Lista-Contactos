import React, { useState, useEffect } from 'react';
import ContactList from './componentes/ContactList';
import AddContactForm from './componentes/AddContactForm';
import './index.css';
import contactsData from './contacts.json'; // Importa los datos iniciales

function App() {
  const [contacts, setContacts] = useState([]);

  // Cargar los contactos iniciales al montar el componente
  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="container">
      <div className="section">
        <AddContactForm onAddContact={addContact} />
      </div>
      <div className="section">
        <ContactList contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  );
}

export default App;
