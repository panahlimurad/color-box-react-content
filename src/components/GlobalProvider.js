import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [colors, setColors] = useState([]);
  const [homeColors, setHomeColors] = useState([]);
  const [groupName, setGroupName] = useState("");

  const printHomeColor = (colorGroup) => {
    setHomeColors([...homeColors, colorGroup]);
    setGroupName("");
  };

   const resetColors = () => {
    setColors([]);
   };

  const addColor = (name, code) => {
    const newColor = { name, code };
    setColors([...colors, newColor]);
    setColorName("");
    setColorCode("");
    };

  return (
    <GlobalContext.Provider
      value={{
        colorName,
        colorCode,
        colors,
        homeColors,
        groupName,
        addColor,
        resetColors,
        printHomeColor,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
