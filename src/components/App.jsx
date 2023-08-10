import React, { useEffect, useState } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
// import Favorites from './Favorites/Favorites';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
    <div className={css.phoneBook}>
      <Form/>
      <ContactList/>
      {/* <Favorites/> */}
    </div>
    </div>
  )
}



