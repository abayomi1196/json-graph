import React, { createContext, useState } from "react";
import { defaultJSON } from "constants/data";

interface JSONContextType {
  json: string;
  updateJSON: (val: string) => void;
}

export const JSONContext = createContext({} as JSONContextType);

export const JSONContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [json, setJson] = useState(defaultJSON);

  function updateJSON(val: string) {
    setJson(val);
  }

  return (
    <JSONContext.Provider value={{ json, updateJSON }}>
      {children}
    </JSONContext.Provider>
  );
};
