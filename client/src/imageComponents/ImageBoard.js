import React, { Component, PropTypes } from 'react';
import CardBoard from './CardBoard'
class ImageBoard extends React.Component {
  state = { images: [] }

  componentDidMount() {
    fetch('/listImages/*')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div float='right' display='inline'>
        <CardBoard images={this.state.images} />
      </div>
    );
  }
}
export default ImageBoard;