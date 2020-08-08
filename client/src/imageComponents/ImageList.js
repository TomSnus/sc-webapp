import React, { Component, PropTypes } from 'react';
import CardList from './CardList'
class ImageList extends React.Component {
  state = { images: [] }

  componentDidMount() {
    fetch('/listImages')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    console.log(this.state.images.length)
    return (
      <div>
        <CardList images={this.state.images} />
      </div>
    );
  }
}
export default ImageList;