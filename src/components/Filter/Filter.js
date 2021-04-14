import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contact-actions';
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

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilterName(e.target.value)),
});

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
