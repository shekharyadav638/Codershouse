import React from "react";
import Card from "../Card/Card";

const Loader = ({ message }) => {
  return (
    <div className="cardWrapper">
      <Card title="Enter the code we just texted you" icon="lock-emoji"></Card>
    </div>
  );
};

export default Loader;
