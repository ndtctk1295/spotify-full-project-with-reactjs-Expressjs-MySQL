import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const NotFound = () => (
  <div className="not-found">
    <label>Error 404 Not Found!</label>

    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
);

export default NotFound;
