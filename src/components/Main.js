import React, { Component } from 'react';

import './Main.css';

import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTasks: '',
      tasks: [],
      index: -1,
    };

    // this.changeInput = this.changeInput.bind(this);
  }

  componentDidMount() {
    const storageTasks = JSON.parse(localStorage.getItem('Assigments'));

    if (!storageTasks) return;

    this.setState({
      tasks: storageTasks,
    });
  }

  componentDidUpdate(pevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('Assigments', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTasks: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTasks } = this.state;
    newTasks = newTasks.trim();

    if (tasks.indexOf(newTasks) !== -1) return;
    if (newTasks === '') return;

    const newTaskss = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTaskss, newTasks],
        newTasks: '',
      });
    } else {
      newTaskss[index] = newTasks;
      this.setState({
        tasks: [...newTaskss],
        index: -1,
        newTasks: '',
      });
    }
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTasks: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTaskss = [...tasks];
    newTaskss.splice(index, 1);

    this.setState({
      tasks: [...newTaskss],
    });
  };

  render() {
    const { newTasks, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTasks={newTasks}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}

        />

      </div>
    );
  }
}
