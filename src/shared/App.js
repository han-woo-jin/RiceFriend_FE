import './App.css';
import React from 'react';
import { history } from '../redux/configStore'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '../elements';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import PostList from '../pages/PostList';


function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Grid>
        <Route path='/' exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Grid>
    </ConnectedRouter>
  );
}


export default App;
