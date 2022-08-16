import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './ContactSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
