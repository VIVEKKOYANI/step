import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { constant } from "../constant";

function Step1({ signupValue, setSignupValue, handleNext }) {
  const selectSignUp = useSelector((state) => state?.signup?.signUp);
  const [error, setError] = useState(false);

  const handleChangeMobileNo = (event) => {
    if (event.target.value.toString().length !== 11) {
      const values = { ...signupValue, mNumber: event.target.value };
      setSignupValue(values);
    }
  };

  const handleCheckMobile = () => {
    if (selectSignUp.some((item) => item.mNumber === signupValue.mNumber)) {
      alert("already number added");
    }else{
        handleNext();
    }
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        type="number"
        value={signupValue.mNumber}
        name="mNumber"
        label="Mobile Number"
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeMobileNo}
      />
      <Button onClick={handleCheckMobile}>{constant.next}</Button>
    </Box>
  );
}

export default Step1;