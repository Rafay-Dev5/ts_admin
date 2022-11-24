export const callAPI = async (
  route,
  token,
  body,
  method = "POST",
  hasFormData = false
) => {
  var url = process.env.REACT_APP_API_ENDPOINT + route;

  // console.log("Calling endpoint: " + url + " with data: " + body);

  var config = {
    method: method,
  };

  if (hasFormData) {
    config = {
      ...config,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      body: body,
    };
  } else if (body != null) {
    config = {
      ...config,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    };
  }

  var Data = await fetch(url, config)
    .then(async (response) => {
      if (response.ok) return Promise.resolve(response.json());
      else {
        console.log({ response });

        if (response.status === 500)
          return Promise.resolve(response.json()).then((responseInJson) => {
            // This will end up in ERROR part
            return Promise.reject(responseInJson.message);
          });
        else return Promise.reject(response.status + " " + response.statusText);
      }
    })
    .then((result) => {
      //console.log("API response ==>" + JSON.stringify(result));
      return result;
    })
    .catch((error) => {
      console.log("error: " + error);
      throw error;
    });

  return Data;
};
