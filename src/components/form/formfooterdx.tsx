import React from "react";

import GridDX from "../layout/griddx";
import ButtonDX from "../controls/buttondx";

const FormFooterDX = () => {
  return (
    <GridDX item sm={12} style={{ marginTop: 16 }}>
      <ButtonDX type="submit">Save</ButtonDX>
    </GridDX>
  );
};

export default FormFooterDX;
