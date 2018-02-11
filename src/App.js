import React, { Component } from 'react';
import Explain from './Explain';
const esprima = require('esprima');

class App extends Component {
  state = {
    inputCode: '',
    code: null,
    ast: null
  }

  handleChange = (e) => {
    this.setState({ inputCode: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputCode } = this.state;
    const code = inputCode;
    const ast = esprima.parse(code);
    console.log(ast);
    this.setState({ ast, code, inputCode: '' });
  }

  render() {
    return (
      <div className="container m-3">
        <header className="App-header">
          <h1 className="App-title">JS Explain</h1>
        </header>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-9">
              <input
                autoFocus
                type="text"
                className="form-control"
                placeholder="Type your code here..."
                value={this.state.inputCode}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary">Explain it!</button>
            </div>
          </div>
        </form>
        <div className="m-3">
        <code>
          {this.state.code}
        </code>
        </div>
        <div className="mt-3 explain">
          <Explain ast={this.state.ast}/>
        </div>
      </div>
    );
  }
}

export default App;
