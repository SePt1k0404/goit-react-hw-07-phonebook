import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { InputFilterWrapper, InputFilter } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handlerChange = evt => dispatch(filterContacts(evt.target?.value));
  return (
    <div style={{ width: '100%' }}>
      <InputFilterWrapper>
        <label>
          Find contacts by name
          <InputFilter type="text" name="filter" onChange={handlerChange} />
        </label>
      </InputFilterWrapper>
    </div>
  );
};
