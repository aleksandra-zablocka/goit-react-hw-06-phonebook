import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/ADD',
    payload: {
      id: nanoid(),
      name,
      number,
      favorite: false,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/REMOVE',
    payload: id,
  };
};

export const toggleFavorite = id => {
  return {
    type: 'contacts/FAVORITE',
    payload: id,
  };
};

export const setStatusFilter = (status) => {
  return {
    type: 'filters/SET',
    payload: status
  }
}
