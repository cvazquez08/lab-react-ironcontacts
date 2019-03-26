import React from 'react';
import "./App.css";


function ContactCard({ contact, index, celebDelete}) {
  const { name, pictureUrl, popularity } = contact;

  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td><button onClick={() => this.celebDelete(index)}>Delete</button></td>
    </tr>
  );
}

export default ContactCard;
