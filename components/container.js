import React, { forwardRef } from "react";

const Container = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
});

export default Container;