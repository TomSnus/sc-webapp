import React, { Component } from 'react'
import './Upload.css'
import Upload from './Upload'

class ConvertComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}

export default ConvertComponent