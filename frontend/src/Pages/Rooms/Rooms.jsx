import React from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../Components/RoomCard/RoomCard";
import AddRoomModel from "../../Components/AddRoomModel/AddRoomModel";
import { useState } from "react";

const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 4,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
];

const Rooms = () => {
  const [showModel, setShowModel] = useState(false);
  const openModal = () => {
    setShowModel(true);
  };
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.Heading}> All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="search-icon"></img>
              <input type="text" className={styles.searchBar}></input>
            </div>
          </div>
          <div className={styles.right}>
            <button className={styles.createRoom} onClick={openModal}>
              <img src="/images/add-room-icon.png" alt="add-room-icon"></img>
              <span>Create a room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomsList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModel && <AddRoomModel onClose={() => setShowModel(false)} />}
    </>
  );
};

export default Rooms;
