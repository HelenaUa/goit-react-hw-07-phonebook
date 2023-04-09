import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filters.value;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contactsItems, filter) => {
    return contactsItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

