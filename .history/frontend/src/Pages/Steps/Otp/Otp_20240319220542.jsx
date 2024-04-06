import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import styles from "./Otp.module.css";
import { verifyOtp } from "../../../http";
import { UseSelector } from "react-redux";

const Otp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const [phone, hash] = UseSelector((state) => state.auth.otp);
  async function submit() {
    //server request
    try {
      const { data } = await verifyOtp({
        otp,
        phone,
        hash,
      });
      console.log(data);
      onNext();
    } catch {}
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />

          <div className={styles.buttonWrapper}>
            <Button text="Next" onClick={submit} />
          </div>
          <p className={styles.bottomPara}>
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

export default Otp;
