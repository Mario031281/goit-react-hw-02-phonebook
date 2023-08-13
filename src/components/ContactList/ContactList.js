import React from 'react';

import { Item, Button, List, ContactListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <ContactListContainer>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Item>
          {name}: {number}
        </Item>
        <Button type="submit" onClick={() => onDelete(id)}>
          Delete contact
        </Button>
      </List>
    ))}
  </ContactListContainer>
);
