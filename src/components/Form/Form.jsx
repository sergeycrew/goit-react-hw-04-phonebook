import { useState } from 'react';
import {
  PhonebookForm,
  InputLabel,
  TextInput,
  FormButton,
} from './Form.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Form = ({ formSubmitHandler }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        console.log(value);
        break;
      case 'number':
        setNumber(value);
        console.log(value);
        break;
      default:
        return;
    }
  };
  const onDelete = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler(name, number);
    // this.props.onSubmit(this.state);
    onDelete();
    event.target.reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <InputLabel htmlFor={nameInputId}>
        <TextInput
          onChange={handleChange}
          placeholder="Full Name"
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>
      <InputLabel htmlFor={numberInputId}>
        <TextInput
          id={numberInputId}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder="123-45-67"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <FormButton type="submit">Add Contact</FormButton>
    </PhonebookForm>
  );
};

Form.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
