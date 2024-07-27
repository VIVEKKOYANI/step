import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { constant } from "../constant";

function Step4({ signupValue, setSignupValue, handleNext, handleBack }) {
  const [error, setError] = useState(false);

  const handleChangeBankAcc = (event) => {
    const values = { ...signupValue, bankAcc: event.target.value };
    setSignupValue(values);
  };

  const handleChangeBankName = (event) => {
    const values = { ...signupValue, bankName: event.target.value };
    setSignupValue(values);
  };

  const handleChangeIfscCode = (event) => {
    const values = { ...signupValue, ifscCode: event.target.value };
    setSignupValue(values);
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.bankAcc}
        name="bankAcc"
        label="bank Acc"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeBankAcc}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.bankName}
        name="bankName"
        label="Bank Name"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeBankName}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.ifscCode}
        name="ifscCode"
        label="IFSC Code"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeIfscCode}
        style={{ marginBottom: "10px" }}
      />
      <Box>
      <Button onClick={handleBack}>{constant.back}</Button>
      <Button onClick={handleNext}>{constant.next}</Button>
      </Box>
    </Box>
  );
}

export default Step4;