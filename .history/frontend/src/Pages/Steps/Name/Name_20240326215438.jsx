import React from "react";
import Card from "../../../Components/Shared/Card/Card";

const Name = ({ onNext }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter your full name" icon="lock-emoji">
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

export default Name;
