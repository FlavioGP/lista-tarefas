import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAssignment: '',
    };

    // this.changeInput = this.changeInput.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      newAssignment: e.target.value,
    });
  };

  render() {
    const { newAssignment } = this.state;
    return (
      <div className="main">
        <h1>
          Lista de tarefas
          {newAssignment}
        </h1>
        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
