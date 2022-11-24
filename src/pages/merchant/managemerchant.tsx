import React, { useState, useEffect, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";

import { useErrorContext } from "../../context/errorcontext";

import LoadingIndicatorDX from "../../components/loadingindicatordx";
import GridDX from "../../components/layout/griddx";
import FormTextControlDX from "../../components/form/formtextcontroldx";
import FormFooterDX from "../../components/form/formfooterdx";
import {
  editMerchant,
  addMerchant,
  getMerchant,
} from "../../services/merchantservice";
import FormUploadControlDX from "../../components/form/formuploadcontroldx";
import { Merchant } from "../../@types/merchant";

const ManageMerchant = () => {
  const { setError, setInfo } = useErrorContext();

  const defaultValues: Merchant = {
    merchantName: "",
  };

  const location = useLocation();
  const navigator = useNavigate();

  const [formValues, setFormValues] = useState<Merchant>(defaultValues);
  const [isLoading, setLoading] = useState(true);
  const [updatedLogoFile, setLogoFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(location.state.id);
    if (location.state.id > 0) {
      getMerchant(location.state.id)
        .then((res) => {
          console.log({ res });
          setFormValues(res);
          setInfo("Value has been set successfully");
        })
        .catch((error) =>
          setError("Value could not be set: " + JSON.stringify(error))
        )
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }

    ValidatorForm.addValidationRule("isRequired", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    });
  }, [location, setError, setInfo]);

  const handleChange = (event: Event) => {
    let target = event.target as HTMLInputElement;
    const { name, value } = target;
    console.log(formValues);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<Element>) => {
    event.preventDefault();
    setLoading(true);

    if (location.state.id > 0) {
      editMerchant(formValues, updatedLogoFile as File, location.state.id)
        .then(() => {
          setInfo("Data Successfully Edited!");
          setLoading(false);
          navigator("/merchantlist");
        })
        .catch((error) => {
          setError("Data Update Failed: " + JSON.stringify(error));
        })
        .finally(() => setLoading(false));
    } else {
      addMerchant(formValues, updatedLogoFile as File)
        .then(() => {
          setInfo("Data Successfully Added!");
          setLoading(false);
          navigator("/merchantlist");
        })
        .catch((error) => {
          setError("Data Add Failed: " + JSON.stringify(error));
        })
        .finally(() => setLoading(false));
    }
  };

  const onLogoChange = (imageFile: File) => {
    setLogoFile(imageFile);
  };

  return (
    <GridDX container alignItems="center" justify="center">
      <LoadingIndicatorDX loading={isLoading} />
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => {
          setError("Value Submission Failure : " + JSON.stringify(errors));
          console.log(errors);
        }}
        style={{ width: "100%" }}
      >
        <FormTextControlDX
          label="Name"
          placeholder="Enter Merchant Name"
          onchange={handleChange}
          name={"merchantName"}
          value={formValues.merchantName}
          validators={["isRequired"]}
          errormessages={["Merchant Name is required!"]}
        />
        <FormUploadControlDX
          label="Logo"
          imageURL={
            formValues.logo
              ? process.env.REACT_APP_API_ENDPOINT +
                "/merchants/logo/" +
                formValues.logo
              : ""
          }
          onChange={onLogoChange}
        />
        <FormFooterDX />
      </ValidatorForm>
    </GridDX>
  );
};

export default ManageMerchant;
