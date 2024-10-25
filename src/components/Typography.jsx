import React from "react";

function Typography({ component: Component = "div", text, className }) {
  return <Component 
  className={className}>{text}</Component>;
}

export default Typography;
