import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import scss from './SignForm.module.scss';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const SignForm = () => {
  const [contact, handleContact] = useState({ ...INITIAL_STATE });
  const contactArray = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contactArray.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact({ name, phone }));
    console.log(`Signed up as: ${name}`);
    reset();
  };

  // ************ Methods *****************

  const handleChange = e => {
    handleContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => handleContact({ ...INITIAL_STATE });

  // ************ End Methods *****************

  const { name, phone } = contact;

  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <label className={scss.label}>
        Name:
        <input
          className={scss.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
      </label>
      <label className={scss.label}>
        Number:
        <input
          className={scss.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={phone}
          required
        />
      </label>
      <button className={scss.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default SignForm;
