import { createAction } from '@reduxjs/toolkit';
//import { v4 as uuidv4 } from 'uuid';
import { v4 as uuid } from 'uuid';
const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuid(),
  },
}));

//console.log(addContact(12345));

const deleteContact = createAction('contacts/delete');
const changeFilterName = createAction('contacts/filter');

const contactActions = {
  addContact,
  deleteContact,
  changeFilterName,
};

export default contactActions;
