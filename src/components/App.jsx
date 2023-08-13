import React, { Component } from 'react';

import { Section } from './Sections/Sections';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import initialContacts from '../data/initialContacts.json';
import { Title, SecondTitle } from './AppStyled';
import { GlobalStyle } from './GlobalStyled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  formSubmitHandler = props => {
    const findName = this.state.contacts.find(
      elem => elem.name.toLowerCase() === props.name.toLowerCase()
    );

    if (findName) {
      return alert(`${findName.name} is already in contacts.`);
    }
    const contact = {
      id: nanoid(),
      name: props.name,
      number: props.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = e => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section>
          <div>
            <Title>Phonebook</Title>
            <div>
              <ContactForm onSubmit={this.formSubmitHandler} />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <SecondTitle>Contact List</SecondTitle>

            <Filter value={filter} onChange={this.handleFilter} />

            <ContactList
              contacts={filteredContacts}
              onDelete={this.handleDelete}
            />
          </div>
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
