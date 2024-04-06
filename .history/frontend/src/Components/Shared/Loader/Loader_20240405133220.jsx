import React from "react";

const Loader = ({ message }) => {
  return (
    <div className="cardWrapper">
      <Card title="Enter the code we just texted you" icon="lock-emoji">
        <div className={styles.buttonWrapper}>
          <Button text="Next" onClick={submit} />
        </div>
      </Card>
    </div>
  );
};

export default Loader;
