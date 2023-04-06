import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filters: '',
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
    
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.name !== action.payload);
        },

        filterContact(state, action) {
            state.filters = action.payload;
        },
    }
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;