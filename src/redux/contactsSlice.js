import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitial = [
  {
    id: 0,
    name: 'Barbara',
    number: '663-222-333',
  },
  {
    id: 1,
    name: 'Piotr',
    number: '555-112-333',
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitial,
  reducers: {
    addContact(state, action) {
      const {name, number} = action.payload;
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      state.push(newContact);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
