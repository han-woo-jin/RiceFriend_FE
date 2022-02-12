
import './App.css';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import { Grid } from '../elements';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import PostWrite from '../pages/PostWrite';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/postwrite" exact component={PostWrite} />
      </Grid>
    </React.Fragment>
  );
}


export default App;
