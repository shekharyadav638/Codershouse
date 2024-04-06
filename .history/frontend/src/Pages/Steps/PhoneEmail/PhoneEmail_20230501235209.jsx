import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from './PhoneEmail.module.css';

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const PhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  function onNext() {}

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
        <div className={styles.buttonWrap}>
          <button onClick={() => setType('phone')}>
            <img src = "/images/" />
          </button>
          <button onClick={() => setType('email')}>Email</button>
        </div>
        <Component onNext={onNext} />
        </div>
      </div> 
    </>
  );
};

export default PhoneEmail;