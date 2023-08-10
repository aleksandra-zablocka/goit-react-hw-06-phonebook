// import React, { useState } from 'react';
import css from './ContactList.module.css';
// import Filter from 'components/Filter/Filter';

import { useSelector } from 'react-redux';
import getContacts from 'redux/selectors';
import ContactEl from 'components/ContactEl/ContactEl';
import statusFilters from 'redux/const';
import Favorites from 'components/Favorites/Favorites';

const getFiltersContacts = (contacts, statusFilters) => {
  const filter = {
    favorite: contact => contact.filter(contact => contact.favorite),
    all: contact => contact,
  };

  const filterFn = filter[statusFilters] || filter['all'];
  return filterFn(contacts);
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilters = useSelector(state => state.filter.status);
  const filterContacts = getFiltersContacts(contacts, statusFilters);

  return (
    <div>
      {contacts.length > 0 ? (
        <div className={css.contactList}>
          <h2>Contact List</h2>
          <Favorites />
          <ul>
            {filterContacts.map(contact => (
              <ContactEl key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
      ) : (
        <div className={css.noContacts}>No contacts available</div>
      )}
    </div>
  );
};
export default ContactList;
