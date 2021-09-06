import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const VARIABLES_API_ENDPOINT = "/api/variables";

const VariablesContext = React.createContext(null);

export function useVariables() {
  const variables = useContext(VariablesContext);
  if (variables === null) {
    throw new Error(
      "`useVariables() should be used inside a <VariablesProvider />`"
    );
  }
  return variables;
}

export function VariablesProvider({ children }) {
  const [variables, setVariables] = useState("LOADING");

  useEffect(() => {
    axios
      .get(VARIABLES_API_ENDPOINT)
      .then((res) => {
        debugger;
        console.log(res);
        setVariables(res.data);
      })
      .catch((err) => {
        setVariables("ERROR");
        throw err;
      });
  }, []);

  if (variables === "LOADING") return <div>Loading...</div>;
  if (variables === "ERROR") {
    return <div>Failed to fetch variables from the server.</div>;
  }

  const dinarsToUsdCents = (dinars) => {
    if (!dinars) return 0;
    return (dinars / variables.dinars_per_usd) * 100;
  };

  const usdCentsToDinars = (cents) => {
    if (!cents) return 0;
    return (cents / 100) * variables.dinars_per_usd;
  };

  const dopedVariables = {
    ...variables,
    dinarsToUsdCents,
    usdCentsToDinars,
  };

  return (
    <VariablesContext.Provider value={dopedVariables}>
      {children}
    </VariablesContext.Provider>
  );
}
