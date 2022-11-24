import React, { useEffect, useState } from "react";

import DialogDX from "../components/controls/dialogdx";
import DialogActionsDX from "../components/controls/dialogactionsdx";
import DialogTitleDX from "../components/controls/dialogtitledx";
import ButtonDX from "../components/controls/buttondx";
import { DialogContent, DialogContentText } from "@mui/material";

const DeleteAlert = (props: any) => {
  console.log("Delete Alert props: " + props);
  const [openAlert, setOpenAlert] = useState(props.openAlert ?? false);

  useEffect(() => {
    setOpenAlert(props.openAlert);
  }, [props.openAlert]);

  return (
    <DialogDX open={openAlert} onClose={() => setOpenAlert(false)}>
      <DialogTitleDX id="alert-dialog-title">Alert</DialogTitleDX>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete?</DialogContentText>
      </DialogContent>
      <DialogActionsDX>
        <ButtonDX onClick={() => props.onOKCallback()} autoFocus>
          OK
        </ButtonDX>
        <ButtonDX color="secondary" onClick={() => props.onCancelCallback()}>
          Cancel
        </ButtonDX>
      </DialogActionsDX>
    </DialogDX>
  );
};
export default DeleteAlert;
