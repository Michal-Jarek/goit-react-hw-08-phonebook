
import { Router } from 'utils/router/Router';
import { useDispatch } from 'react-redux';
import { useAuth } from 'utils/hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :(<Router />
    
  )
};







{
  /*


import Section from './Section/Section';
import SignForm from './SignForm/SignForm';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';


<div
      style={{
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: '15px',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e6e3e3',
      }}
    >
      
      <Section title="Phonebook">
        <SignForm />
      </Section>

      <Section title="Contacts">
        <UserList>
          <Filter />
       
        </UserList>
      </Section>
    </div> */
}