import React from "react";
import { useState } from "react";
export default function ModalPage() {
  const [visible, setVisible] = useState(false);
  const onClickButton = () => {
    setVisible((currentValue) => !currentValue);
  };
  return (
    <div className="parent-block">
      <button onClick={onClickButton}>Open Modal</button>
      {visible && (
        <div className="overlay">
          <div className="modal">
            <h3>Hello</h3>
            <p>This is a modal page</p>
            <button onClick={onClickButton}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
