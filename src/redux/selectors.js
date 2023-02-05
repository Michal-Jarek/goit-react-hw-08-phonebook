import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
    (contacts, filterValue) => {
    if (filterValue.length === 0) return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
