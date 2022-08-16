import React from 'react';
import { Wrapper } from './App.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Wrapper>
      <ContactEditor />
      <Filter />
      <div></div>
      <ContactList />
    </Wrapper>
  );
};
