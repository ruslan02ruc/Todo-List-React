import { createContext, useState } from "react";

let ThemeContext = createContext({value : 'text'})

export const ThemeProvider = ({children}) => {
  console.log(children);
  const [value, setValue] = useState('value')

  return (
    <ThemeContext.Provider value={{value, setValue}}>
      {children}
    </ThemeContext.Provider>
  );
}