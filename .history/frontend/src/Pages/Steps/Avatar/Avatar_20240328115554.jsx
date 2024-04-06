import React from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";

const Avatar = ({ onNext }) => {
  function submit() {}

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Okay, Shekhar!" icon="monkey-emoji">
          <div>
            <Button text="Next" onClick={submit} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Avatar;
