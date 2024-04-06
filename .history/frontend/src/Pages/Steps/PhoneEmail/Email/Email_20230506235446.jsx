import React from "react";
import Card from "../../../../Components/Shared/Card/Card";
import Button from "../../../../Components/Shared/Button/Button";


const Phone = () => {
  return (
    <Card title="Enter Your Email" icon="email-emoji">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButton}>
          <Button text="Next" />
        </div>
        <p className={styles.phoneText}>
          By entering your email, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
