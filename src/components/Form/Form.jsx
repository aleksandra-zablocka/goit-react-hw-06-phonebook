import css from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = event => {
    event.preventDefault();

    if (contact.name && contact.number) {
      dispatch(addContact({ name: contact.name, number: contact.number }));
      setContact({ name: '', number: '' });
    }
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChangeInput}
        />
        <input
          className={css.input}
          type="tel"
          name="number"
          placeholder="Number"
          value={contact.number}
          onChange={handleChangeInput}
        />
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
