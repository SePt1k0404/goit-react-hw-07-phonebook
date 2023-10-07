import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';

export const App = () => {
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
