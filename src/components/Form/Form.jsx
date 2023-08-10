import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

const Form = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', number: '', id: '' });

  const handleChange = e => {
    const { value, name } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contact;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(newContact);
    setContact({ name: '', number: '', id: '' });
  };

  return (
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contact.number}
          onChange={handleChange}
          required
        />
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;