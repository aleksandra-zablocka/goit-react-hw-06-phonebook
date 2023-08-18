import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import Filter from 'components/Filter/Filter';
import ContactEl from 'components/ContactEl/ContactEl';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = filterContacts();

  return (
    <div>
      <div className={css.contactList}>
        <h2>Contact List</h2>
        <ul>
          <Filter />
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <ContactEl key={contact.id} contact={contact} />
            ))
          ) : (
            <div className={css.noContacts}>
              No contacts available
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
