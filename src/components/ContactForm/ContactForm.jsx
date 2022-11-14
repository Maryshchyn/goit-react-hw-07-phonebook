import { Form, Label } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setContactName(event.currentTarget.value);
        break;
      case 'number':
        setPhone(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts
        .map(({ name }) => name.toLocaleLowerCase())
        .some(name => name === contactName.toLocaleLowerCase())
    ) {
      return alert(`${contactName} is already in contacts`);
    }
    const contact = {
      contactName,
      phone,
    };
    dispatch(addContact(contact));

    formReset();
  };

  const formReset = () => {
    setContactName('');
    setPhone('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <button type="submit">Add contact</button>
    </Form>
  );
};