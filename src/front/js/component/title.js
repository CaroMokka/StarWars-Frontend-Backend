import React from "react";

export const Title = (props) => {
  return (
    <div className="text-center bg-black bg-opacity-75  border-top border-bottom border-warning border-1 my-4">
   
      <h2 className="fw-light text-warning my-4">{props.name}</h2>

    </div>
  );
};
