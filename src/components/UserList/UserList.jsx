import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';

import scss from './UserList.module.scss';

const UserList = ({ children }) => {
  const dispatchFetch = useDispatch();
  const filteredArray = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatchFetch(fetchContacts());
  }, [dispatchFetch]);

  return (
    <>
      {children}
      <div>{isLoading && !error && <b>Request in progress...</b>}</div>
      <ul className={scss.list}>
        {filteredArray.map(({ name, number: phone, id }) => (
          <li className={scss.listItem} key={id}>
            {name}: {phone}
            <button
              className={scss.button}
              onClick={() => dispatchFetch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

UserList.propTypes = {
  children: PropTypes.element,
};

export default UserList;
