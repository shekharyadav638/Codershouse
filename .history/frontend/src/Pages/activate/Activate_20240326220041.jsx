import React, { useState } from "react";
import Name from "../Steps/Name";
import Avatar from "../Steps/Avatar";

const steps = {
  1: Name,
  2: Avatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Activate;