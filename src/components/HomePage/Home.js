import { GlobalContext } from "../GlobalProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { homeColors } = useContext(GlobalContext);

  console.log("homeColors", homeColors);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-slate-50 text-5xl">Home Page</h1>
      <Link
        to="/settings"
        className="bg-red-700 mt-5 text-slate-100 w-2/5 h-10 rounded-md hover:bg-red-600 flex items-center justify-center"
      >
        <button>Create new color Box</button>
      </Link>
      <div className="flex flex-col w-full items-center mt-10">
        {homeColors.map((colorGroup, groupIndex) => (
          <div key={groupIndex}>
            <p className="text-slate-50 text-xl">{colorGroup.groupName}</p>
            <div className="flex w-3/4 mt-3 bg-white">
              {colorGroup.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-grow p-7 "
                  style={{ backgroundColor: color.code }}
                >
                  {color.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
