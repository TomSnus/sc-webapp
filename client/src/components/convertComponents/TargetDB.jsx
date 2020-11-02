import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { RiDatabase2Fill } from 'react-icons/ri';
import './Upload.css';

const databases = [
  {
    value: 'MariaDB',
    label: 'MariaDB',
  },
  {
    value: 'MSSQL',
    label: 'Microsoft SQL',
  },
];

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
      <form noValidate autoComplete="off">
        <div>
          <TextField
          id="outlined-select-database"
          select
          label="Select Database"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RiDatabase2Fill />
              </InputAdornment>
            ),
          }}
          value={this.database}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your target Database"
          variant="outlined"
        >
          {databases.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
      </form>
    )
  }
}

export default TargetDB