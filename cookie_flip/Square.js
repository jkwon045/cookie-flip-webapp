import React from "react";

const Square = ({ value, onClick }) => {
  //style depends if there is a value of x or O: else if there isnt anything there then its just null
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );


};

export default Square;