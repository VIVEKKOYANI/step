import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { constant } from "../constant";

function Step2({ signupValue, setSignupValue, handleNext, handleBack }) {
  const [error, setError] = useState(false);
  const handleChangeFName = (event) => {
    let values = { ...signupValue, fName: event.target.value };
    setSignupValue(values);
  };

  const handleChangeLName = (event) => {
    let values = { ...signupValue, lName: event.target.value };
    setSignupValue(values);
  };

  const handleChangeEmail = (event) => {
    let values = { ...signupValue, email: event.target.value };
    setSignupValue(values);
  };

  const handleChangeAddress = (event) => {
    let values = { ...signupValue, address: event.target.value };
    setSignupValue(values);
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        type="text"
        value={signupValue.fName}
        name="fName"
        label="First Name"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeFName}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="text"
        value={signupValue.lName}
        name="lName"
        label="Last Name"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeLName}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="email"
        value={signupValue.email}
        name="email"
        label="First Name"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeEmail}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="text"
        value={signupValue.address}
        name="address"
        label="Address"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeAddress}
        style={{ marginBottom: "10px" }}
      />
      <Box>
        <Button onClick={handleBack}>{constant.back}</Button>
        <Button onClick={handleNext}>{constant.next}</Button>
      </Box>
    </Box>
  );
}

export default Step2;