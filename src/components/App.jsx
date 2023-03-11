import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  if(parsedContacts) {
    this.setState({contacts: parsedContacts});
  }
  }

componentDidUpdate(prevProps, prevState) {
if (this.state.contacts !== prevState.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
}

  formSubmitHandler = data => {
    const inputDataName = data.name.toLowerCase();
    const inputNumber = data.number;
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === inputDataName
      )
    ) {
      alert(`${data.name} is already in your phonebook, bro!`);
    } else if (
      this.state.contacts.find(({ number }) => number === inputNumber)
    ) {
      alert(`${data.name} is already in your phonebook, bro!`);
    }
    else {
      data.id = nanoid();
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
      console.log(this.contacts);  
    }
  };

  getFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter)
    );
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <>
            <Filter value={filter} onChange={this.getFilter} />
            <ContactList
              contacts={this.getFilteredContacts()}
              onDeleteContact={this.deleteContact}
            />
          </>
        </Section>
      </>
    );
  }
}
