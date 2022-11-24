import React from "react";
import GridDX from "../layout/griddx";
import { TextValidator } from "react-material-ui-form-validator";
import { InputLabel } from "@mui/material";

const FormTextControlDX = (props: any) => {
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
        <InputLabel htmlFor={props?.label}>{props?.label}</InputLabel>
      </GridDX>
      <GridDX item xs={8} md={6}>
        <TextValidator
          style={{ width: "80%" }}
          id={props?.label}
          placeholder={props?.placeholder}
          onChange={props?.onchange}
          name={props?.name}
          value={props?.value}
          validators={props?.validators}
          errorMessages={props?.errormessages}
          multiline={props?.multiline}
          rows={props?.rows}
          disabled={props?.disabled}
        />
      </GridDX>
    </div>
  );
};

export default FormTextControlDX;
