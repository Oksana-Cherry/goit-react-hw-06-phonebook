import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.Title}>
      Find contacts by name
      <input
        className={styles.Title_input}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default Filter;
