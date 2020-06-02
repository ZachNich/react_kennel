import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login';
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />      
      <Route exact path="/animals/:animalId(\d+)" render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}
            />
          );
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} /> 
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route exact path="/locations" render={props => {
          if (isAuthenticated()) {
          return <LocationList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />      
      <Route path="/locations/:locationId(\d+)" render={props => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
      }} />
      <Route
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />      
      <Route
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
          return <OwnerList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />      
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

export default ApplicationViews;