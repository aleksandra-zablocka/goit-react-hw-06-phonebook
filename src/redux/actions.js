import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
      favorite: false,
    },
  };
});

export const removeContact = createAction('contacts/REMOVE');

export const setStatusFilter = createAction('filters/SET');

export const toggleFavorite = createAction('contacts/FAVORITE');
