export const filteredContacts = state => {
  const contacts = state.contacts.value;
  const filter = state.filter;
  return contacts?.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};
