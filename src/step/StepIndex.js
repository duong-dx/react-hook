import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function StepIndex(props) {
  const [step, setStep] = useState(1);
  return (
    <div className="stepwizard-row setup-panel">
      <div className="stepwizard-step">
        <span type="button" class="btn btn-primary btn-circle">
          1
        </span>
        <p>Step 1</p>
      </div>
      <div className="stepwizard-step">
        <span
          type="button"
          class="btn btn-default btn-circle"
          disabled="disabled"
        >
          2
        </span>
        <p>Step 2</p>
      </div>
      <div className="stepwizard-step">
        <span
          type="button"
          className="btn btn-default btn-circle"
          disabled="disabled"
        >
          3
        </span>
        <p>Step 3</p>
      </div>
    </div>
  );
}

export default StepIndex;
