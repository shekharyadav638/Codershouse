import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";
import styles from "./Avatar.module.css";
import { useSelector } from "react-redux";

const Avatar = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");

  function submit() {}

  return (
    <>
      <div>
        <Card title={`Okay, ${name}!`} icon="monkey-emoji">
          <p className={styles.para}>How's this photo?</p>
          <div className={styles.avatar}>
            <img className={styles.img} src={image} alt="avatar" />
          </div>
          <div>
            <input
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />
            <label htmlFor="avatarInput" />
          </div>
          <div>
            <Button text="Next" onClick={submit} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Avatar;
