import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useDispatch, useSelector } from "react-redux";
import { addNewMember } from "../redux/signupSlice";

const steps = [
  {
    label: "Step 1",
    content: <Step1 />,
  },
  {
    label: "Step 2",
  },
  {
    label: "Step 3",
  },
  {
    label: "Step 4",
  },
  {
    label: "Step 5",
  },
];

const defState = {
  mNumber: null,
  fName: "",
  lName: "",
  email: "",
  address: "",
  adharNumber: "",
  panNumber: "",
  bankAcc: "",
  bankName: "",
  ifscCode: null,
  term: false,
};

export default function VerticalLinearStepper() {
  const dispatch = useDispatch();
  const selectSignUp = useSelector((state) => state?.signup?.signUp);
  const [activeStep, setActiveStep] = React.useState(0);
  const [signupValue, setSignupValue] = React.useState(defState);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = () => {
    dispatch(addNewMember(signupValue));
    let string = JSON.stringify([...selectSignUp, signupValue]);
    localStorage.setItem("signUp", string);
    setSignupValue(defState);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {index === 0 && (
                <Step1
                  signupValue={signupValue}
                  setSignupValue={setSignupValue}
                  handleNext={handleNext}
                />
              )}

              {index === 1 && (
                <Step2
                  signupValue={signupValue}
                  setSignupValue={setSignupValue}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              )}

              {index === 2 && (
                <Step3
                  signupValue={signupValue}
                  setSignupValue={setSignupValue}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              )}
              {index === 3 && (
                <Step4
                  signupValue={signupValue}
                  setSignupValue={setSignupValue}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              )}
              {index === 4 && (
                <Step5
                  signupValue={signupValue}
                  setSignupValue={setSignupValue}
                  handleFinish={handleFinish}
                  handleBack={handleBack}
                />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}