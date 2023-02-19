import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  createContact = (name, number) => {
    return { id: nanoid(4), name, number };
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.number.value;

    this.setState(({ contacts }) => ({
      contacts: [...contacts, this.createContact(name, tel)],
    }));

    console.log(this.state.contacts);
    form.reset();
  };
  render() {
    const { contacts } = this.state;

    return (
      <section>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <Contacts contactsTitle={'Contacts'} contacts={contacts} />
      </section>
    );
  }
}
