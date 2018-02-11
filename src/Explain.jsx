import React, { Component } from 'react';
import VariableDeclaration from './VariableDeclaration';

class Explain extends Component {
  renderExplanation = (node) => {
    const types = {
      VariableDeclaration: node => <VariableDeclaration node={node} />
    }

    return types[node.type](node);
  }

  render() {
    const { ast } = this.props;
    return (
      <div>
        {
          ast ?
            ast.body.map(e => this.renderExplanation(e)) :
            <h2>Type code and click "Explain it!"</h2>
        }
      </div>
    )
  }
}

export default Explain;