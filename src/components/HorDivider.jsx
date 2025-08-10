import React from "react";

function HorDivider({ color }) {
  const style = {
    height: '4px',
    backgroundColor: color,
    margin: '20px 0',
  };

  return <div style={style}></div>;
}

export default HorDivider;

