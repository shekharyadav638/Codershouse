import React from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import TextInput from "../../../Components/Shared/TextInput/TextInput";

const Name = ({ onNext }) => {
  const [name, setName] = useState("");
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="goggle-emoji">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />

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
