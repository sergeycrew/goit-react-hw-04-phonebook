import { PhonebookList } from './ContactList.styled';
import { ListItem } from 'components/ListItem/Listitem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <PhonebookList>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
        // <ListItem key={id}>
        //   {name} : {number}
        //   <Button type="button" onClick={() => onDeleteContact(id)}>
        //     <FaRegTimesCircle size="20px" />
        //   </Button>
        // </ListItem>
      ))}
    </PhonebookList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
