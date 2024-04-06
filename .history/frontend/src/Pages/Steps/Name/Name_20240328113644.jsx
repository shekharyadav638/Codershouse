import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import styles from "./Name.module.css";

const Name = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState(name);

  function nextStep() {
    if (!fullname) return;
    dispatch(setName(fullname));
    onNext();
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="goggle-emoji">
          <TextInput
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <p className={styles.paragraph}>
            People use real names at Codershouse:) !
          </p>
          <div>
            <Button text="Next" onClick={nextStep} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Name;
