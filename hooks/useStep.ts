import { useState } from "react";

interface UseStepProps {
  childrens: React.ReactElement[];
}

const useStep = ({ childrens }: UseStepProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = childrens[currentStep];

  const totalSteps = childrens.length;

  const next = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previous = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,
    StepComponent,
    next,
    previous,
    totalSteps: childrens.length,
  };
};

export default useStep;
