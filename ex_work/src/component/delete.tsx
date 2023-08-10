import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteMovie } from '../query';
import { Link } from "react-router-dom";
interface Props{
  delete :number 
}

export default function Delete(props: Props) {
  const [open, setOpen] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletepost =useDeleteMovie();

 const handledelete=()=>{
    deletepost.mutate(props.delete)
    setOpen(false)
 }
  return (
    <div>
      <Button variant="contained" style={{backgroundColor:'red'}} onClick={handleClickOpen}>
        DELETE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure it will be deleted?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          If the video is deleted, it cannot be returned
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>cancel</Button>
          <Link to="/movie">
          <Button onClick={handledelete} variant="contained" style={{backgroundColor:'red'}}>
            Delete
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}