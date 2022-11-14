import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.stateRedux.contacts.items;
export const selectIsLoading = state => state.stateRedux.contacts.isLoading;
export const selectError = state => state.stateRedux.contacts.error;
export const selectFilter = state => state.stateRedux.filter;
export const getIsContactExist = state =>
  Boolean(state.stateRedux.contacts.items.length);

export const selectVisibleontacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);