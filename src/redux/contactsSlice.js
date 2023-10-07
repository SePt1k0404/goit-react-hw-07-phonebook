import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const slice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact(state, action) {
      if (state.value?.some(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts.`);
      } else {
        action.payload.id = nanoid();
        state.value.push(action.payload);
      }
    },
    deleteContact(state, action) {
      return {
        ...state,
        value: state.value.filter(el => el.name !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, slice.reducer);

export const { addContact, deleteContact } = slice.actions;
