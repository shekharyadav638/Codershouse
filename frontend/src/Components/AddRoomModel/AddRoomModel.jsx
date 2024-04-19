import React, { useState } from "react";
import styles from "./AddRoomModel.module.css";
import TextInput from "../Shared/TextInput/TextInput";
import { createRoom as create } from "../../http";
import { useNavigate } from "react-router-dom";

const AddRoomModel = ({ onClose }) => {
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      navigate(`/room/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic for Room</h3>
          <TextInput
            fullwidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room Types</h2>
          <div className={styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.roomBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/images/globe.png" alt="globe" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.roomBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/images/social.png" alt="social" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("lock")}
              className={`${styles.roomBox} ${
                roomType === "lock" ? styles.active : ""
              }`}
            >
              <img src="/images/lock.png" alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modelFooter}>
          <h2>Start a room , open to everyone</h2>
          <button className={styles.button} onClick={createRoom}>
            <img src="/images/celebration.png" alt="celebration" />
            <span>Let's Go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModel;
