import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from './PhoneEmail.module.css';

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const PhoneEmail = ({ onNex }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  function onNext() {}

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
        <div className={styles.buttonWrap}>
          <button className={`${styles.tabButton} ${type === 'phone' ? styles.active : '' }`}  onClick={() => setType('phone')}>
            <img src = "/images/phone-white.png" alt = "phone"/>
          </button>
          <button className={`${styles.tabButton} ${type === 'email' ? styles.active : '' }`} onClick={() => setType('email')}>
          <img src = "/images/mail-white.png" alt = "email"/>
          </button>
        </div>
        <Component onNext={onNex} />
        </div>
      </div> 
    </>
  );
};

export default PhoneEmail;