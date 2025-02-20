import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, setContacts }) {

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  const favorites = contacts.filter(contact => contact.favorite);
  const others = contacts.filter(contact => !contact.favorite);

  return (
    <div className="container">
      <div className="section">
        <h2>Favoritos</h2>
        {favorites.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={deleteContact} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
      <div className="section">
        <h2>Contactos</h2>
        {others.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={deleteContact} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
