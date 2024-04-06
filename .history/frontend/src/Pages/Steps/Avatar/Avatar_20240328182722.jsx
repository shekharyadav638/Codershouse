import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import Button from "../../../Components/Shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";
import styles from "./Avatar.module.css";
import { useSelector, useDispatch } from "react-redux";

const Avatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");

  function submit() {}

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  }

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
              onChange={captureImage}
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />
            <label className={styles.label} htmlFor="avatarInput">
              Choose a different photo
            </label>
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
