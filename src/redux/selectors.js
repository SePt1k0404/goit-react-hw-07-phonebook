import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.value;
const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const filteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts?.filter(el =>
      el?.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
