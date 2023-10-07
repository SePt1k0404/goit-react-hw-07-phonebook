import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchContacts(signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div style={{ width: '100%', marginTop: '70px' }}>
      <h2
        style={{
          display: 'block',
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Phonebook
      </h2>
      <PhoneBookForm />
      <h2
        style={{
          display: 'block',
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <ContactsFilter />
      <Contacts />
    </div>
  );
};
