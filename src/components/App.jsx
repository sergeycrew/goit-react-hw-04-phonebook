import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import baseContacts from './services/contacts.json';
import { nanoid } from 'nanoid';

const CONTACTS_LIST_LOCAL_KEY = 'contacts-list';

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const inputDataName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === inputDataName)
    ) {
      alert(`${name} is already in your phonebook, bro!`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${name} is already in your phonebook, bro!`);
    } else {
      setContacts(prevContacts => [
        {
          name,
          id: nanoid(),
          number,
        },
        ...prevContacts,
      ]);
      console.log(contacts);
    }
  };

  function getContacts() {
    const localStorageContacts = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
    const parsedContacts = JSON.parse(localStorageContacts);
    if (parsedContacts) {
      return parsedContacts;
    } else return baseContacts;
  }

  useEffect(() => {
    localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const getFilter = event => {
    return setFilter(event.target.value);
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section title="Phonebook">
        <Form formSubmitHandler={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <>
          <Filter value={filter} onChange={getFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </>
      </Section>
    </>
  );
};

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// formSubmitHandler = data => {
//   const inputDataName = data.name.toLowerCase();
//   const inputNumber = data.number;
//   if (
//     this.state.contacts.some(
//       ({ name }) => name.toLowerCase() === inputDataName
//     )
//   ) {
//     alert(`${data.name} is already in your phonebook, bro!`);
//   } else if (
//     this.state.contacts.find(({ number }) => number === inputNumber)
//   ) {
//     alert(`${data.name} is already in your phonebook, bro!`);
//   } else {
//     data.id = nanoid();
//     this.setState(({ contacts }) => ({
//       contacts: [data, ...contacts],
//     }));
//     console.log(this.contacts);
//   }
// };

// getFilter = event => {
//   this.setState({ filter: event.currentTarget.value.toLowerCase() });
// };

// getFilteredContacts() {
//   const { contacts, filter } = this.state;
//   return contacts.filter(person =>
//     person.name.toLowerCase().includes(filter)
//   );
// }

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

//   render() {
//     const { filter } = this.state;
//     return (
//       <>
//         <Section title="Phonebook">
//           <Form onSubmit={this.formSubmitHandler} />
//         </Section>
//         <Section title="Contacts">
//           <>
//             <Filter value={filter} onChange={this.getFilter} />
//             <ContactList
//               contacts={this.getFilteredContacts()}
//               onDeleteContact={this.deleteContact}
//             />
//           </>
//         </Section>
//       </>
//     );
//   }
// }
