import { combineReducers } from 'redux';
import statusFilters from './const';

const contactsInitial = [
  {
    id: 0,
    name: 'Barbara',
    number: '663-222-333',
    favorite: false,
  },
  {
    id: 1,
    name: 'Piotr',
    number: '555-112-333',
    favorite: true,
  },
];

const filtersInitial = {
  status: statusFilters,
};

const filtersReducer = (state = filtersInitial, action) => {
  switch (action.type) {
    case 'filters/SET':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

const contactsReducer = (state = contactsInitial, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];

    case 'contacts/REMOVE':
      return state.filter(contact => contact.id !== action.payload);

    case 'contacts/FAVORITE':
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return { ...contact, favorite: !contact.favorite };
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  // contacts: [],
  //   filter: '',
});
