import React, { Component, PropTypes } from 'react';
import CardList from './CardList'
class ContainerList extends React.Component {
  state = { images: [] }

  componentDidMount() {
    fetch('/listContainers')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div>
        <CardList images={this.state.images} />
      </div>
    );
  }
}
export default ContainerList;