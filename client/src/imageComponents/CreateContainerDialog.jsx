import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState} from 'react' 
export default function CreateContainerDialog(props) {

  const [open,  setOpen] = React.useState(false);
  const [ severity,  setSeverity] = React.useState("success");
  const [name, setName] = useState('');
  const [hostname, setHostname] = useState('');
  const [domainname, setDomainname] = useState('');
  const [ports, setPorts] = useState('');

  const handleCreate = () => {
    fetch('/operations/createContainer/'+ props.image.id+'/'+name+'/'+hostname+'/'+domainname+'/'+ports )
    setSeverity("success");
    setOpen(true);
  };

  return (
    <div>
      <Dialog open={true} onClose={() =>{props.handleClose("info", "Container creation aborted") } } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Container 🐳️</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Specify container 🔥️:
          <br/>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Hostname"
            label="Hostname"
            type="text"
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
            fullWidth
          />
           <TextField
            margin="dense"
            id="Domainname"
            label="Domainname"
            type="text"
            value={domainname}
            onChange={(e) => setDomainname(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="ports"
            label="Ports"
            type="text"
            value={ports}
            onChange={(e) => setPorts(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            props.handleClose("info", "Container creation aborted");
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            handleCreate(); props.handleClose("success", "Container created");
          }} color="primary">
            Commit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
