import React, { Component } from 'react'
import './Upload.css'
import Upload from './Upload'
import TargetDB from './TargetDB';

class ConvertComponent extends Component {
  render() {
    return (
      <div className='App'>
        <div className="Card">
          <Upload />
        </div>
        <div className="Card">
        <TargetDB />
      </div>
      </div>
    )
  }
}

export default ConvertComponent