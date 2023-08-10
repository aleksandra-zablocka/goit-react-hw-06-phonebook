import css from './ContactEl.module.css';

const ContactEl = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      <p>
        {name}, {number}{' '}
      </p>
      <button className={css.deleteBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactEl;