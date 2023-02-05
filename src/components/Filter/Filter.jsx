import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';

import scss from './Filter.module.scss';

const Filter = () => {
  let contactFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={scss.label}>
      Find contacts by name:
      <input
        className={scss.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={contactFilter}
        required
      />
    </label>
  );
};

export default Filter;
