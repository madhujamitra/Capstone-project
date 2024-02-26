import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";



export default function DialogBox({open,handleClose,  output}){





return (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    {output ? (
      <>
        <DialogTitle id="alert-dialog-title">Title</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {output.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </>
    ) : null}
  </Dialog>
);

}