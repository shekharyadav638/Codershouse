import React,{useState} from "react";
import Card from "../../../../Components/Shared/Card/Card";
import Button from "../../../../Components/Shared/Button/Button";
import TextInput from "../../../../Components/Shared/TextInput/TextInput";
import styles from "../PhoneEmail.module.css";

const Phone = () => {
  const [email, setEmail] = useState("");
  return (
    <Card title="Enter Your Email" icon="email-emoji">
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
