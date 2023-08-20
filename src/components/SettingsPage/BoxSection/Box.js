import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalProvider";

const Box = () => {
  const { colors } = useContext(GlobalContext);
  console.log("colors",colors);
 
  const limitedColors = colors.slice(0, 6);

 


  return (
    <div className="flex flex-col mt-10 items-center">
      <div className="flex w-3/4">
        {limitedColors.map((color, index) => (
          <div
            key={index}
            className="flex-grow p-7"
            style={{ backgroundColor: color.code }}
          >
            {color.name}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Box;
