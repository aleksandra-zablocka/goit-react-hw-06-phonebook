import css from './ContactEl.module.css';

import { useDispatch } from "react-redux";
import { removeContact, toggleFavorite } from "redux/actions";

const ContactEl = ({contact}) => {
const dispatch = useDispatch();

const handleRemove = () => dispatch(removeContact(contact.id));
const handleToggle = () => dispatch(toggleFavorite(contact.id));

return (
  <div className={css.contactEl}>
    <input type="checkbox" checked={contact.favorite} onChange={handleToggle}/>
    <p>{contact.name}</p>
    <p>{contact.number}</p>
    <button className={css.removeBtn} onClick={handleRemove}>Remove</button>
  </div>
)
}

export default ContactEl;