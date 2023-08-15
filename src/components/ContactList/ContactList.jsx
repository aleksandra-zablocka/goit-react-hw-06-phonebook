// import Filter from 'components/Filter/Filter';
// import getContacts from 'redux/selectors';
// import statusFilters from 'redux/const';

import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactEl from 'components/ContactEl/ContactEl';
import Favorites from 'components/Favorites/Favorites';

const getFiltersContacts = (contacts, statusFilters) => {
  const filter = {
    favorite: contact => contact.filter(contact => contact.favorite),
    all: contact => contact,
  };

  const filterFn = filter[statusFilters] || filter['all'];
  return filterFn(contacts);
};

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const statusFilters = useSelector(state => state.filters.status);
  const filterContacts = getFiltersContacts(contacts, statusFilters);
  
  return (
    <div>
      {/* {contacts.length > 0 ? ( */}
      <div className={css.contactList}>
        <h2>Contact List</h2>
        <Favorites />
        <ul>
          {filterContacts.length > 0 ? (
            filterContacts.map(contact => (
              <ContactEl key={contact.id} contact={contact} />
            ))
          ) : (
            <div className={css.noContacts}>
              {statusFilters === 'favorite'
                ? 'No favorite contacts'
                : 'No contacts available'}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;