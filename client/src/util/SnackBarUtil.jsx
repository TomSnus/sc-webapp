
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';


class SnackAlert extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <MuiAlert elevation={6} variant="filled" {...this.props} />;
      </div>
    )
  }
}

export default SnackAlert;