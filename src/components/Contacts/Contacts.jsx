import { ContactsItem } from './ContactsItem';
import { ContactsList, ContactsListItem } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/selectors';

export const Contacts = () => {
  const filteredContactsList = useSelector(filteredContacts);
  const contactsArr = filteredContactsList?.map(el => (
    <ContactsListItem key={el.id}>
      <ContactsItem name={el.contact} number={el.number} />
    </ContactsListItem>
  ));
  return (
    <>
      <ContactsList>{contactsArr}</ContactsList>
    </>
  );
};
