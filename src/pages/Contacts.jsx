import UserList from 'components/UserList/UserList';
import Section from 'components/Section/Section';
import SignForm from 'components/SignForm/SignForm';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
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
    </div>
  );
};

export default ContactsPage;
