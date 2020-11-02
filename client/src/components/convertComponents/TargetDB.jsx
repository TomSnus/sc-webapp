import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import Title from '../../Title';
import './Upload.css';

class TargetDB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: 'MariaDB'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({database: event.target.value});
  };

  render() {
    return (
      <div><Title>Target Database</Title>
        <FormControl className="formControl">
          <InputLabel id="targetdb-select-input-label">Database</InputLabel>
          <Select
            labelId="targetdb-select-label"
            id="targetdb-select"
            value={this.database}
            onChange={this.handleChange}
          >
            <MenuItem value={10}>MariaDB</MenuItem>
            <MenuItem value={20}>SQLServer</MenuItem>
          </Select>
        </FormControl></div>
    )
  }
}

export default TargetDB