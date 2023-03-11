import { SearchForm, InputLabel, TextInput } from './Filter.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <SearchForm>
      <InputLabel htmlFor={nanoid()}>
        <TextInput
          id={nanoid()}
          onChange={onChange}
          value={value}
          type="text"
          name="filter"
          placeholder="find contacts by name"
          autoComplete="off"
          required
        />
      </InputLabel>
    </SearchForm>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
