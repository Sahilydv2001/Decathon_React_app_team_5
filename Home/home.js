import { Alert } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="homebanner">welcome to home page</div>
        {/* // creating a home page */}
        <div>
          <li>
            <Link from="/" to="/login">
              {/* providing a login button to jump to login page */}
              <button>go to login page</button>
              {/* providing login button  */}
            </Link>
          </li>
        </div>
      </div>
    );
  }
}
export default Home;
