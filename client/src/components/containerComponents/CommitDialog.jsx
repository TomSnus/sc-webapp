import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
export default function CommitDialog(props) {

  const [open,  setOpen] = React.useState(false);
  const [ severity,  setSeverity] = React.useState("success");
  const [tag, setTag] = useState('');
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [repo, setRepo] = useState('');

  const handleCommit = () => {
    console.log('Tag ' +{tag} )
    fetch('/operations/commit/'+ props.container.id+'/'+repo+'/'+tag+'/'+comment+'/'+author )
    setSeverity("success");
    setOpen(true);
  };

  return (
    <div>
      <Dialog open={true} onClose={() =>{props.handleClose("info", "Commit aborted") } } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Commit</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Do you want to commit the current container state? 🐳️
          <br/>
          <b>Container:</b>{props.container.id}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="tag"
            label="Tag"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            fullWidth
          />
           <TextField
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="tag"
            label="Repo"
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            props.handleClose("info", "Commit aborted");
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            handleCommit(); props.handleClose("success", "Container commited");
          }} color="primary">
            Commit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
