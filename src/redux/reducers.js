import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  setFilter,
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

const initialState = {
  // contacts: [],
  contacts: contactsInitial,
  filter: '',
};

// przy oddawaniu finalnej wersji pracy domowej zamienic contacts na pustą tablicę - teraz jest contactsInitial, żeby testować czy apka działa

export const contactsReducer = createReducer(initialState.contacts, {
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
  [setFilter]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
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
