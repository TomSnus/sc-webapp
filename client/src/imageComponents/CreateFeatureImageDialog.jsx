import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

export default function CreateFeatureImageDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("success");
    const [feature, setFeature] = useState('');

    const handleCreate = () => {
        fetch('/operations/createImage/' + props.image + '/' + feature)
        setSeverity("success");
        setOpen(true);
    };

    return (
        <div>
          <Dialog open={true} onClose={() => { props.handleClose("info", "Image creation aborted") }} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create Image</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Create a Docker Image for a Feature Branch:
              <br />
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="Feature"
                label="Feature ID"
                type="text"
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {
                props.handleClose("info", "Image creation aborted");
              }} color="primary">
                Cancel
              </Button>
              <Button onClick={() => {
                handleCreate(); props.handleClose("success", "Image created");
              }} color="primary">
                Commit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}