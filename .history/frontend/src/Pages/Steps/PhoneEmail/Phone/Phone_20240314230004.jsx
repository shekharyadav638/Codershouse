import React, { useState } from "react";
import Card from "../../../../Components/Shared/Card/Card";
import Button from "../../../../Components/Shared/Button/Button";
import TextInput from "../../../../Components/Shared/TextInput/TextInput";
import styles from "../PhoneEmail.module.css";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  function submit() {
    //server request

    onNext();
  }

  return (
    <Card title="Enter Your Phone Number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButton}>
          <Button text="Next" onClick={submit} />
        </div>
        <p className={styles.phoneText}>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
