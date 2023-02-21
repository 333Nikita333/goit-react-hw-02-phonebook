import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
}

export default Filter;
