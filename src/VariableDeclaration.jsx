import React, { Component } from 'react';

class VariableDeclaration extends Component {
  render() {
    const { kind, declarations } = this.props.node;
    const explanation = {
      const: 'объявление константы, чья область действия может быть как глобальной, так и локальной внутри блока, в котором она объявлена.',
      let: 'объявление переменной с блочной областью видимости с возможностью инициализировать её значением.'
    }

    return (
      <div>
        <p>{kind} - {explanation[kind]}</p>
        <code>{JSON.stringify(declarations)}</code>
      </div>
    )
  }
}

export default VariableDeclaration;