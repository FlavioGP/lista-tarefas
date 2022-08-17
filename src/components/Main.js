import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAssignment: '',
      assignments: [],
      index: -1,
    };

    // this.changeInput = this.changeInput.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      newAssignment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { assignments, index } = this.state;
    let { newAssignment } = this.state;
    newAssignment = newAssignment.trim();

    if (assignments.indexOf(newAssignment) !== -1) return;
    if (newAssignment === '') return;

    const newAssignments = [...assignments];

    if (index === -1) {
      this.setState({
        assignments: [...newAssignments, newAssignment],
        newAssignment: '',
      });
    } else {
      newAssignments[index] = newAssignment;
      this.setState({
        assignments: [...newAssignments],
        index: -1,
        newAssignment: '',
      });
    }
  };

  handleEdit = (e, index) => {
    const { assignments } = this.state;

    this.setState({
      index,
      newAssignment: assignments[index],
    });
  };

  handleDelete = (e, index) => {
    const { assignments } = this.state;
    const newAssignments = [...assignments];
    newAssignments.splice(index, 1);

    this.setState({
      assignments: [...newAssignments],
    });
  };

  render() {
    const { newAssignment, assignments } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={newAssignment} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="assignments">
          {assignments.map((assignment, index) => (
            <li key={assignment}>
              {assignment}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
