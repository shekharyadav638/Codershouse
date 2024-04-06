import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";

const Name = ({ onNext }) => {
  const [name, setName] = useState("");

  function nextStep() {}

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="goggle-emoji">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />

          <p className={styles.bottomPara}>
            People use real names at Codershouse:) !
          </p>
          <div className={styles.buttonWrapper}>
            <Button text="Next" onClick={nextStep} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Name;
