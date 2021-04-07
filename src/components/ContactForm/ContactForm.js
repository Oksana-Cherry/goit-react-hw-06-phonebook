import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { Component } from 'react';

import { v4 as uuid } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, number });
    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert(`Some field is empty`);

      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(this.state);

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Forms} onSubmit={this.handleSubmit}>
        <label className={styles.Form_label}>
          Name
          <input
            className={styles.Form_input}
            type="text"
            name="name"
            placeholder=""
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.Form_label}>
          Number
          <input
            className={styles.Form_input}
            type="tel"
            name="number"
            placeholder=""
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.Form_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
};
export default ContactForm;
