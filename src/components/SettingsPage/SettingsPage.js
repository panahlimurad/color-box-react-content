import React from "react";
import Form from "./FormSection/Forum";
import Box from "./BoxSection/Box";

const SettingsPage = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-slate-50 text-5xl">Setting Page</h1>
        <p className="text-slate-50 mt-3">
          Here you can create your own color groups by choosing 6 color names or
          codes and saving them.
        </p>
        <Form />
        <Box />
      </div>
    </>
  );
};

export default SettingsPage;
