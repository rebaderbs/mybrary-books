import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Userfront from "@userfront/react";

function Dashboard() {

    const userData = JSON.stringify(Userfront.user, null, 2);
    
    return (
      <div>
        <h2>Dashboard</h2>
        <pre>{userData}</pre>
        <button onClick={Userfront.logout}>Logout</button>
      </div>
    );

    function renderFn({ location }) {
        // If the user is not logged in, redirect to login
        if (!Userfront.accessToken()) {
          return (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
    
        // If the user is logged in, show the dashboard
        // const userData = JSON.stringify(Userfront.user, null, 2);
        // return (
        //   <div>
        //     <h2>Dashboard</h2>
        //     <pre>{userData}</pre>
        //     <button onClick={Userfront.logout}>Logout</button>
        //   </div>
        // );
      }
    
      return <Routes><Route render={renderFn} /></Routes>;
    }


export default Dashboard;