import React from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";
import styles from "./Avatar.module.css";

const Avatar = ({ onNext }) => {
  function submit() {}

  return (
    <>
      <div>
        <Card title="Okay, Shekhar!" icon="monkey-emoji">
          <p className={styles.para}>How's this photo?</p>
          <div>
            <Button text="Next" onClick={submit} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Avatar;
