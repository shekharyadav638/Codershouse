import React from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import { setAvatar } from "../../../store/activateSlice";

const Avatar = ({ onNext }) => {
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

export default Avatar;
