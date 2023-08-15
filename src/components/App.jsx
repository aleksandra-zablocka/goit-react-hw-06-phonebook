import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.phoneBook}>
        <Form />
        <ContactList />
      </div>
    </div>
  );
}
