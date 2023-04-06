import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistContactsReducer } from "./contactsSlice";


export const store = configureStore({
    reducer: {
       contacts: persistContactsReducer,
    },
     middleware: getDefaultMiddleware =>
       getDefaultMiddleware({
       serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);