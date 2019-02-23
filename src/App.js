import React, { Component } from 'react';
import logo from './logo.svg';
import agent from './agent';
import Header from './components/Header';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from './constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from './components/Article';
import Editor from './components/Editor';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Register from './components/Register';
import Settings from './components/Settings';
import { store } from './store';
import { push } from 'react-router-redux';
import './App.css';

class App extends Component {
  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
            <Route path="/" component={Register} />
           
            </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default App;
