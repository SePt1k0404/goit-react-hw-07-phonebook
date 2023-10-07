import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactsListBtn, ContactsListInfo } from './ContactsItem.styled';

export const ContactsItem = ({ name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = evt => {
    dispatch(deleteContact(evt.target.value));
  };
  return (
    <>
      <ContactsListInfo>
        {name} {number}
      </ContactsListInfo>
      <ContactsListBtn value={name} type="button" onClick={handleDeleteContact}>
        Delete
      </ContactsListBtn>
    </>
  );
};
