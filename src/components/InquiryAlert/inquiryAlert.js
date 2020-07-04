import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function InquiryAlert(props) {
  const {
    openInquiry,
    handleInquiryClose,
    inquiryTitle = "title",
    inquiryContext = "context",
    leftButton = "取消",
    rightButton = "同意",
    leftButtonFunc = () => {},
    rightButtonFunc = () => {},
  } = props;
  //   const [openInquiry, setOpenInquiry] = React.useState(false);

  return (
    <div>
      <Dialog
        open={openInquiry}
        onClose={handleInquiryClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{inquiryTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {inquiryContext}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={leftButtonFunc} color="primary">
            {leftButton}
          </Button>
          <Button onClick={rightButtonFunc} color="primary" autoFocus>
            {rightButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
