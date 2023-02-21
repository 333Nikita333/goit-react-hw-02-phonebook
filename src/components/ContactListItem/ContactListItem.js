import PropTypes from 'prop-types';

const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li id={id}>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactsListItem;
