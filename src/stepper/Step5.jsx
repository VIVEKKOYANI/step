import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { constant } from "../constant";

function Step5({ signupValue, setSignupValue, handleFinish, handleBack }) {
  const [error, setError] = useState(false);

  const handleChangeTerms = (event) => {
    console.log("sss", event);
    const values = { ...signupValue, term: event.target.checked };
    setSignupValue(values);
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        type="checkbox"
        value={signupValue.term}
        name="term"
        label="Terms & Condition "
        variant="outlined"
        error={error}
        helperText={error ? "Incorrect entry." : ""}
        onChange={handleChangeTerms}
        style={{ marginBottom: "10px" }}
      />
      <Box>
        <Button onClick={handleBack}>{constant.back}</Button>
        <Button onClick={handleFinish}>{constant.finish}</Button>
      </Box>
    </Box>
  );
}

export default Step5;