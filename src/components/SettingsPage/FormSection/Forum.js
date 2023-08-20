import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalProvider";
import { Link } from "react-router-dom";

const Form = () => {
  const { addColor, printHomeColor, resetColors } = useContext(GlobalContext);
  const [newName, setNewName] = useState("");
  const [newCode, setNewCode] = useState("");
  const { colors } = useContext(GlobalContext);
  const [groupName, setGroupName] = useState("");
  
  const handleHomeColor = () => {
    const newColorGroup = {
      groupName: groupName,
      colors: [...colors], 
    };
    printHomeColor(newColorGroup);
    resetColors(); 
    setGroupName("");
  };

  const handleUpdate = () => {
    addColor(newName, newCode);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form className="flex flex-col w-3/4 gap-5">
        <input
          value={newName}
          type="text"
          className="h-10 rounded-md"
          placeholder="Color Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          value={newCode}
          type="text"
          className="h-10 rounded-md"
          placeholder="Color Code"
          onChange={(e) => setNewCode(e.target.value)}
        />
      </form>
      <button
        onClick={handleUpdate}
        className="bg-red-800 mt-5 rounded-lg w-40 text-cyan-50 h-10 hover:bg-red-600"
      >
        Add Color
      </button>
      <Link
        to="/"
        className="mt-5 bg-green-900 w-3/4 rounded-md h-10 text-slate-50 hover:bg-green-700"
      >
        <button onClick={handleHomeColor}>Save</button>
      </Link>
      <form className="mt-5 w-3/4">
        <input
          type="text"
          className="w-full rounded-md h-10"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
