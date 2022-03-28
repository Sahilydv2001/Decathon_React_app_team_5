import React from "react";
import { Link } from "react-router-dom";
const Nomatch = ({ history }) => {
  return (
    <div style={{ marginleft: "10px" }}>
      <h1>
        404 Page redirectiong to
        <ul>
          {/* creating an error page to be displayed to the user for displayng erro */}
          <li>
            <Link to="/">Login</Link>
            {/* providing login link to the user  */}
          </li>
        </ul>
      </h1>
    </div>
  );
};
export default Nomatch;
