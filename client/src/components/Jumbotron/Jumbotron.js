import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

class Jumbotron extends React.Component{

  render () {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid jumboStyle rounded">
          <div className="container">
            <h1 className="display-4">New York Times Search</h1> 
            <Link to="/saved">
              <button className="routeBtn">Saved</button>
            </Link>
            <Link to="/">
              <button className="routeBtn">Home</button>
            </Link>
          </div>
        </div>
      </div>
    )};
}

export default Jumbotron;
