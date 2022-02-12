
import './App.css';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import { Grid } from '../elements';
import Signup from '../pages/Signup';
import Header from '../components/Header';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Grid>
    </React.Fragment>
  );
}


export default App;
