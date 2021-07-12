import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Conponant/Navbar';
import Login from './Conponant/Login';
import Register from './Conponant/Register';
import Home from './Conponant/Home';
import Dashboard from './Conponant/Dashboard';
import React from 'react';
import { useEffect } from 'react';
import {deviceDetect} from 'react-device-detect'
import { useDispatch, useSelector } from 'react-redux';
import { analysis} from './Actions/index'
function App() {

  const user = useSelector(state=> state.Auth.authdata);
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.addEventListener('click', ()=>{
      const actiondata = { browser_name: deviceDetect().browserName,event_type: "Click", user_id:user?.result?  user.result._id :""  }
      dispatch(analysis(actiondata));

    });

  }, []);
useEffect(()=>{
  const actiondata = { browser_name: deviceDetect().browserName,event_type: "Page_load", user_id:user?.result?  user.result._id :""  }
  dispatch(analysis(actiondata));


},[])
  return (
    <Router>
      <Switch>
      <Route exact path="/dashboard">
      
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </Route>
        <Route exact path="/">
          <Navbar></Navbar>
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Navbar></Navbar>
          <Login></Login>
        </Route>
        <Route  exact pathr="/register">
          <Navbar></Navbar>
          <Register></Register>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
