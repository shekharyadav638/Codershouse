import React from "react";
import styles from "./Rooms.module.css";

const Rooms = () => {
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.Heading}> All voice rooms</span>
            <div></div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
