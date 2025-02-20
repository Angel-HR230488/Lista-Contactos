import React from 'react';

function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className="contact">
      <h2>
        {contact.firstName} {contact.lastName}
        {contact.favorite && <span className="star">★</span>}
      </h2>
      <p>{contact.phone}</p>
      <button onClick={() => onToggleFavorite(contact.id)} className="favorite">
        {contact.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
      <button onClick={() => onDelete(contact.id)} className="delete">Eliminar</button>
    </div>
  );
}

export default Contact;
