import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: { value: [], isLoading: false, error: null },
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
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value.push(...action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.name !== 'CanceledError') {
          alert(`Emerged some problems. Try to reload the page!`);
        }
      });
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
