import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  setStatusFilter,
  toggleFavorite,
} from './actions';
import { statusFilters } from './const';

const contactsInitial = [
  {
    id: 0,
    name: 'Barbara',
    number: '663-222-333',
    favorite: true,
  },
  {
    id: 1,
    name: 'Piotr',
    number: '555-112-333',
    favorite: false,
  },
];

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [toggleFavorite]: (state, action) => {
    return state.map(contact => {
      if (contact.id !== action.payload) {
        return contact;
      }
      return { ...contact, favorite: !contact.favorite };
    });
  },
});

const filtersInitial = {
  status: statusFilters,
};

export const filtersReducer = createReducer(filtersInitial, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
