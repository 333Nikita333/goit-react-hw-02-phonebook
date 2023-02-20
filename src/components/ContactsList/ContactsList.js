import ContactListItem from 'components/ContactListItem';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};
export default ContactsList;
