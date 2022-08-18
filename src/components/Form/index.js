import React from 'react';

import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, newTasks }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={newTasks} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>

  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTasks: PropTypes.string.isRequired,
};
