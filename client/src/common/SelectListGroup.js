import React from "react";
import PropTypes from "prop-types";
const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={`form-control form-control-lg}`}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default SelectListGroup;
