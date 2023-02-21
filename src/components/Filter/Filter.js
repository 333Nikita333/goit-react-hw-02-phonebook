const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} />
    </label>
  );
};
export default Filter;
