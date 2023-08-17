import css from './ContactEl.module.css';
import { useDispatch } from "react-redux";
import { removeContact } from 'redux/contactsSlice';

const ContactEl = ({contact}) => {
const dispatch = useDispatch();

const handleRemove = () => {
  dispatch(removeContact(contact.id))
}

return (
  <div className={css.contactEl}>
    <p>{contact.name}</p>
    <p>{contact.number}</p>
    <button className={css.removeBtn} onClick={handleRemove}>Remove</button>
  </div>
)
}

export default ContactEl;