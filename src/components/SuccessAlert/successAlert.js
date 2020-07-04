import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

//scss
import "./successAlert.scss";

//material ui
import LinearProgress from "@material-ui/core/LinearProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessAlert(props) {
  const {
    alertName,
    alertContext,
    openAlert,
    handleAlertClose,
    alertLinearProgress = false,
    alertAutoClose = false,
    alertDuration = 2000,
  } = props;

  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    if (openAlert && alertLinearProgress) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          // if (oldProgress === 100) {
          //   return 0;
          // }
          console.log(oldProgress);
          if (oldProgress === 100 && alertAutoClose) {
            clearInterval(timer);
            setTimeout(() => {
              handleAlertClose(false);
            },10);
          }
          const diff = 100 / (alertDuration / 100);
          return Math.min(oldProgress + diff, 100);
        });
      }, 100);

      return () => {
        clearInterval(timer);
        setProgress(0);
      };
    }
  }, [openAlert]);

  return (
    <div>
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{alertName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {alertContext}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose} className="success-alert">
            關閉
          </Button>
        </DialogActions>
        {alertLinearProgress ? (
          <LinearProgress variant="determinate" value={progress} />
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
}
