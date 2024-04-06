import React, { useState } from "react";
import Name from "../Steps/Name/Name";
import Avatar from "../Steps/Avatar/Avatar";

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
    <div className="card">
      <Step onNext={onNext} />
    </div>
  );
};

export default Activate;
