import React from "react";

export const Title = (props) => {
  return (
    <div className=" d-flex flex-column align-items-center text-center mt-4">
      <hr className="my-2 text-light w-50" size="2"></hr>
      <h2 className="text-light">{props.name}</h2>
      <hr className="my-2 text-light w-50" size="2"></hr>
    </div>
  );
};
