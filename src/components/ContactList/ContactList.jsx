import React, { useState } from 'react';
import ContactEl from 'components/ContactEl/ContactEl';
import css from './ContactList.module.css';
import Filter from 'components/Filter/Filter';

const ContactList = ({ contacts, deleteContact }) => {
  const [filter, setFilter] = useState('');

  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={css.contactList}>
      <h2>Contacts</h2>
      <Filter onFilterChange={setFilter} filter={filter} />
      <p className={css.label}>Name, number</p>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <ContactEl
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      ) : (
        <p className={css.noContacts}>No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;