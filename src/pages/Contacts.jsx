import UserList from 'components/UserList/UserList';
import Section from 'components/Section/Section';
import SignForm from 'components/SignForm/SignForm';
import Filter from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Section title="Phonebook">
        <SignForm />
      </Section>

      <Section title="Contacts">
        <UserList>
          <Filter />
        </UserList>
      </Section>
      <button type="button" onClick={() => dispatch(logOut())}>
        Click to logout
      </button>
    </div>
  );
};

export default ContactsPage;
