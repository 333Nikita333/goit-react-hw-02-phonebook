const Contacts = ({ contactsTitle, contacts }) => {
  return (
    <div>
      <h2>{contactsTitle}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contacts;