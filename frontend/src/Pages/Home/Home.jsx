import React from "react";
import styles from "./Home.module.css";
import {useNavigate } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";

const Home = () => {

  const signInStyle ={
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
  }

  const navigate  = useNavigate();
  function startRegister () {
    navigate('/authenticate')
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon = "logo">
        <p className={styles.para}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick = {startRegister} text = "Let's Go"/>
        </div>
        <div className={styles.signin}>
          <span className={styles.invite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
