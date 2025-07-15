// RegistrationFlow.js
import React, { useState, useEffect } from "react";
import StepOne from "../../components/Stepper/StepOne";
import StepTwo from "../../components/Stepper/stepTwo";

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          city: "",
          gender: "",
          languages: [],
          type: "",
        };
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 2 && (
        <StepTwo
          prevStep={prevStep}
          updateFormData={updateFormData}
        />
      )}
    </>
  );
}
