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
export default ContactsListItem;
