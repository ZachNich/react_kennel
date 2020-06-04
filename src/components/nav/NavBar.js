import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  // const highlightCurrentNav = (props, id) => {
  //   if (props.history.location.pathname.includes(id.split('-')[1])) {
  //     this.className.add('')
  //   }
  // }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
          {props.history.location.pathname === '/' 
            ? <span className="active"> Home </span>
            : <Link className="nav-link" to="/"> Home </Link>}
          </li>
          {props.hasUser
            ? <li>
                {props.history.location.pathname === '/animals' 
                  ? <span className="active"> Animals </span>
                  : <Link className="nav-link" to="/animals"> Animals </Link>}
              </li>
            : null}
          {props.hasUser
            ? <li>
              {props.history.location.pathname === '/locations' 
                ? <span className="active"> Locations </span>
                : <Link className="nav-link" to="/locations"> Locations </Link>}
              </li>
            : null}
          {props.hasUser
            ? <li>
              {props.history.location.pathname === '/employees' 
                ? <span className="active"> Employees </span>
                : <Link className="nav-link" to="/employees"> Employees </Link>}
              </li>
            : null}
          {props.hasUser
            ? <li>
                {props.history.location.pathname === '/owners' 
                ? <span className="active"> Owners </span>
                : <Link className="nav-link" to="/owners"> Owners </Link>}
              </li>
            : null}
          {!props.hasUser
            ? <li>
                {props.history.location.pathname === '/login' 
                ? <span className="active"> Login </span>
                : <Link className="nav-link" to="/login"> Login </Link>}
              </li>
            : <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);