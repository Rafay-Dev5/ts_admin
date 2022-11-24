import React, { createContext, useContext, useState } from "react";

interface Param {
  children: any;
}

const ErrorContext = createContext({
  error: "",
  info: "",
  setError: (error: string) => {},
  setInfo: (info: string) => {},
});

export const useErrorContext = () => useContext(ErrorContext);

const ErrorContextProvider = ({ children }: Param) => {
  const [error, setError] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  return (
    <ErrorContext.Provider value={{ error, info, setError, setInfo }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
