import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import contactActions from '../../redux/contacts/contact-actions';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.List_item} key={id}>
      <p>{name + ': ' + number}</p>
      <button className={styles.List_button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;

  return (
    <ul className={styles.List}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactActions.deleteContact(id)),
});
ContactList.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
