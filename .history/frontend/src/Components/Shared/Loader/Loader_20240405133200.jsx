import React from "react";

const Loader = ({ message }) => {
  return (
    <div className="cardWrapper">
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
  );
};

export default Loader;
