import { ContactItem, Button } from './ListItem.styled';
import { FaRegTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem key={id}>
      {name} : {number}
      <Button type="button" onClick={onDeleteContact}>
        <FaRegTimesCircle size="20px" />
      </Button>
    </ContactItem>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
