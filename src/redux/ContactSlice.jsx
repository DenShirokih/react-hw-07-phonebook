import { createSlice } from '@reduxjs/toolkit';

import shortid from 'shortid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContanct(state, action) {
      state.items = [
        ...state.items,
        { ...action.payload, id: shortid.generate() },
      ];
    },
  },
});

export const { addContanct, deleteContact, filterContact } =
  contactSlice.actions;
