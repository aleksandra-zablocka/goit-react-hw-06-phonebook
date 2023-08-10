import css from './Form.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

const Form = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(contact.name, contact.number));
    form.reset();
  };

  const handleChangeInput = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
    <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChangeInput}
      />
      <input className={css.input}
        type="tel"
        name="number"
        placeholder="Number"
        onChange={handleChangeInput}
      />
      <button className={css.submitBtn} type="submit">Add contact</button>
    </form>
    </div>
  );
};

export default Form;
