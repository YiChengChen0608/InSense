import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveDialog({ open, handleClose, confirmCancel, bookId }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"確定要取消預約嗎？"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            按下確定後就無法再更改囉！！！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id={bookId} onClick={confirmCancel} color="primary" autoFocus>
            確定
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            取消
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
