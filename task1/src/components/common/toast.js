import React from "react";
import "./toast.scss";
import { useGlobalContext } from "../../context/context";

export default function CustomToast() {
  const { state } = useGlobalContext();

  return (
    <div className={`custom-toast ${state.showToast ? "visible" : ""}`}>
      <span>{state.message}</span>
      <div className="custom-toast__background" />
    </div>
  );
}
