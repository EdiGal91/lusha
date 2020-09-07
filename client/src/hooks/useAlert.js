import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export const useAlert = (title, seconds = 3, variant = "danger") => {
  let alert = <span>Alert...</span>
  const show = () => {
    alert = <Alert variant={variant}>{title}</Alert>;
    setTimeout(() => {
        alert=''
    }, seconds * 1000);
  }
  return [alert, show];
};

export default useAlert;
