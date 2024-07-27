import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { constant } from "../constant";

function Step3({ signupValue, setSignupValue, handleNext, handleBack }) {
  const [error, setError] = useState(false);

  const handleChangeAddarNo = (event) => {
    const values = { ...signupValue, adharNumber: event.target.value };
    setSignupValue(values);
  };

  const handleChangePanNumber = (event) => {
    const values = { ...signupValue, panNumber: event.target.value };
    setSignupValue(values);
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.adharNumber}
        name="adharNumber"
        label="Adhar Number"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeAddarNo}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.panNumber}
        name="panNumber"
        label="Pan Number"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangePanNumber}
        style={{ marginBottom: "10px" }}
      />
      <Box>
        <Button onClick={handleBack}>{constant.back}</Button>
        <Button onClick={handleNext}>{constant.next}</Button>
      </Box>
    </Box>
  );
}

export default Step3;