import React from "react";
import Uploadxl from "./Uploadxl/upxl/uploadxl";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login/login";
import Nomatch from "./Uploadxl/upxl/Nomatch";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

import Home from "./Home/home";

// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // loggedIn:false
    };
  }

  render() {
    return (
      <div>
        <div>
          <Routes>
            {/* <Route exact path="/" > {this.props.loggedIn? <Navigate to="/upload"/> : <Home/>}</Route> */}

            <Route exact path="/login" element={<Login />} />
            {/* here we have provided path t all the pages like login, uploading file and viewing it. */}
            <Route exact path="/" element={<Home />} />
            {/* path for home */}
            <Route exact path="/login/upload" element={<Uploadxl />} />
            {/* path for uploading excel file */}
            <Route path="*" element={<Nomatch />} />
            {/* path for nomatch */}
          </Routes>
          <Link to="/">Home</Link>
          {/* link to home page */}
        </div>
      </div>
    );
  }
}
export default App;
