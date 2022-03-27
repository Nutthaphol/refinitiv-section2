import React from "react";

const Column2 = (props) => {
  const { calculation, setCalculation, calculationFn } = { ...props };

  const handleSelect = (e) => {
    setCalculation(e.target.value);
  };

  return (
    <div className="col_2" style={{}}>
      <select value={calculation} onChange={handleSelect}>
        {calculationFn.map((val, index) => (
          <option key={index + val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Column2;
