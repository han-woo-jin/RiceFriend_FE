import './App.css';
import React from 'react';
import { history } from '../redux/configStore'
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import PostWrite from '../pages/PostWrite';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
        <Route path='/' exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write/:id" exact component={PostWrite} />
        <Route path="/write/" exact component={PostWrite} />
        <Route path="/post/:id" exact component={PostDetail} />
    </ConnectedRouter>
  );
}


export default App;
