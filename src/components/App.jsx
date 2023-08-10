import React, { useEffect, useState } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const addContact = newContact => {
    const doesContactExist = contacts.some(
      contact =>
        contact.id === newContact.id || contact.name === newContact.name
    );

    if (doesContactExist) {
      alert('There is such contact on the list');
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="book">
      <Form addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
