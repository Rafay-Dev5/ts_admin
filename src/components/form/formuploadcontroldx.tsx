import React, { useState } from "react";
import GridDX from "../layout/griddx";
import { IconButton, InputLabel } from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";

const FormUploadControlDX = ({
  label,
  imageURL,
  onChange,
}: {
  label: string;
  imageURL: string;
  onChange: Function;
}) => {
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const selectImage = (e: any) => {
    var files = e.target.files;
    var mimeType = files[0].type;

    // if (!mimeType.startsWith("image")) {
    //   setErrorMessage("Incorrect file type!");
    //   setShowAlert(true);
    //   return;
    // } else {
    //   setErrorMessage("");
    //   setShowAlert(false);
    // }

    setUploadedImage(URL.createObjectURL(files[0]));
    onChange(files[0]);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      <GridDX
        item
        xs={4}
        md={3}
        style={{ display: "flex", alignItems: "center" }}
      >
        <InputLabel htmlFor={label}>{label}</InputLabel>
      </GridDX>
      <GridDX item xs={8} md={6} style={{ position: "relative" }}>
        <img
          src={uploadedImage ? uploadedImage : imageURL}
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "1px solid #cdcdcd",
          }}
          loading="lazy"
        />
        <IconButton
          color="primary"
          style={{ position: "absolute", bottom: -15, left: 55 }}
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" onChange={selectImage} />
          <PhotoCamera />
        </IconButton>
      </GridDX>
    </div>
  );
};

export default FormUploadControlDX;
