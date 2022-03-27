import React from "react";

const Column3 = (props) => {
  const { answer } = { ...props };
  return (
    <div className="col_3">
      <span>{answer}</span>
    </div>
  );
};

export default Column3;
