import { Merchant } from "../@types/merchant";
import { callAPI } from "../apis/apiCalls";

export const getAllMerchants = async () => {
  try {
    let data = await callAPI("/merchants", "", null, "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMerchant = async (id: number) => {
  try {
    let data = await callAPI(`/merchants/${id}`, "", null, "GET");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addMerchant = async (formValues: Merchant, logoFile: File) => {
  try {
    const formdata = createFormDataWithFile(formValues, logoFile);
    return await callAPI("/merchants", "", formdata, "POST", true);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editMerchant = async (
  formValues: Merchant,
  logoFile: File,
  id: number
) => {
  try {
    const formdata = createFormDataWithFile(formValues, logoFile);
    return await callAPI(`/merchants/${id}`, "", formdata, "PATCH", true);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteMerchant = async (id: number) => {
  try {
    await callAPI(`/merchants/${id}`, "", null, "DELETE");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createFormDataWithFile = (formValues: Merchant, logoFile: File) => {
  var formdata = new FormData();

  if (logoFile) formdata.append("file", logoFile, logoFile.name);

  if (formdata.has("merchantID")) {
    formdata.append("merchantID", formValues.merchantID?.toString() as string);
  }
  formdata.append("merchantName", formValues.merchantName);
  // formdata.append("streetAddress", formValues.streetAddress);
  // formdata.append("cityID", formValues.cityID);
  // formdata.append("countryID", formValues.countryID);

  return formdata;
};
