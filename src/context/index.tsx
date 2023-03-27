import React from "react";

export const Context = React.createContext<any>(null);

export const ContextProvider = (props: any) => {
  const { children } = props;
  const [theme, setTheme] = React.useState<string | null>(null);
  const value = {
    theme,
    setTheme,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
