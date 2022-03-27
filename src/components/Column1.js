import React from "react";

const Column1 = (props) => {
  const { number, setNumber } = { ...props };

  const handleChangeNumber = (e) => {
    const insertValue = e.target.value;
    let finalValue;

    if (insertValue < 0) {
      finalValue = 1;
    } else if (!Number.isInteger(insertValue)) {
      finalValue = Math.round(insertValue);
    } else {
      finalValue = insertValue;
    }

    setNumber(finalValue);
  };
  return (
    <div className="col_1">
      <input value={number} onChange={handleChangeNumber} type="number" />
    </div>
  );
};

export default Column1;
