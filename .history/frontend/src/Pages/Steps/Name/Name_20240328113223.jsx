import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";

const Name = ({ onNext }) => {
  const [fullname, setFullname] = useState();

  function nextStep() {
    if (!fullname) return;

    dispatch();
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="goggle-emoji">
          <TextInput
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

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
