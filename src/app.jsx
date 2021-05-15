import React from "react";
import { Link } from "react-router-dom";

export const App = () => {
  const text = "something";
  return (
    <div>
      {text}
      <Link to="/something">Something</Link>
    </div>
  );
};
