import React from "react";
import Form from "./FormSection/Forum";
import Box from "./BoxSection/Box";

const SettingsPage = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-slate-50 text-5xl">Setting Page</h1>
      <Form />
      <Box />
      </div>
    </>
  );
};

export default SettingsPage;
