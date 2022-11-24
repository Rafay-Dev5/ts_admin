import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

import { useErrorContext } from "../context/errorcontext";

const NotificationBarDX = () => {
  const { error, info, setError, setInfo } = useErrorContext();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (error || info) {
      setAlertMessage(error || info);
      setShowAlert(true);
    }
  }, [error, info]);

  const handleAlertClose = () => {
    setShowAlert(false);
    setAlertMessage("");
    setError("");
    setInfo("");
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlert}
      autoHideDuration={5000}
      onClose={handleAlertClose}
    >
      <Alert onClose={handleAlertClose} severity={error ? "error" : "info"}>
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default NotificationBarDX;
