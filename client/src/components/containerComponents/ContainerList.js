import React, { Component, PropTypes } from 'react';
import CardList from './CardList'
class ContainerList extends React.Component {
  state = { containers: [] }

  componentDidMount() {
    fetch('/listContainers')
      .then(res => res.json())
      .then(containers => this.setState({ containers }));
  }

  render() {
    return (
      <div>
        <CardList containers={this.state.containers} />
      </div>
    );
  }
}
export default ContainerList;