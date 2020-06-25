import React, { useState } from "react";
import PropTypes from "prop-types";

ToDoForm.propTypes = {
  onSubmit: PropTypes.func
};

ToDoForm.defaultProps = {
  onSubmit: null
};

function ToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit && value != "") {
      const dataPush = {
        title: value
      };
      onSubmit(dataPush);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name={value} value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default ToDoForm;
