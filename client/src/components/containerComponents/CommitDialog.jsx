import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function CommitDialog() {

    const [open, setOpen] = React.useState(false);

  const handleCommit = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(true);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Commit</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Do you want to commit the current container state? 🐳️
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="tag"
            label="Tag"
            type="text"
            fullWidth
          />
           <TextField
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCommit} color="primary">
            Commit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        < Alert onClose={handleClose} severity="info">
            Container commited
        </Alert>
        </Snackbar>
    </div>
  );
}
