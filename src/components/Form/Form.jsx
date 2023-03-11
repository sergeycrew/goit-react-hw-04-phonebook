import { Component } from 'react';
import {
  PhonebookForm,
  InputLabel,
  TextInput,
  FormButton,
} from './Form.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    event.target.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <InputLabel htmlFor={this.nameInputId}>
          <TextInput
            onChange={this.handleChange}
            placeholder="Full Name"
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputLabel>
        <InputLabel htmlFor={this.numberInputId}>
          <TextInput
            id={this.numberInputId}
            onChange={this.handleChange}
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
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
