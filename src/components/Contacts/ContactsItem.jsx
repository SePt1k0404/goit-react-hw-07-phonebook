import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactsListBtn, ContactsListInfo } from './ContactsItem.styled';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = evt => {
    dispatch(deleteContact(evt.target.value));
  };
  return (
    <>
      <ContactsListInfo>
        {name} - {number}
      </ContactsListInfo>
      <ContactsListBtn value={id} type="button" onClick={handleDeleteContact}>
        Delete
      </ContactsListBtn>
    </>
  );
};
