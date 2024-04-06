import React from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";

const Avatar = ({ onNext }) => {
  function submit() {
    setAvatar("👨‍🚀");
    onNext();
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="goggle-emoji">
          <div>
            <Button text="Next" onClick={submit} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Avatar;
