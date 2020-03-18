import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersContainer/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { getAuthenticationData } from './redux/auth-reducer';
import Preloader from './components/common/Preloader';
import withSuspense from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    let getAuthDataPromise = this.props.getAuthenticationData();
    Promise.all([getAuthDataPromise]).then(() => {
      this.props.initializeApp();
    })
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="appWrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className='appWrapper__content'>
          <Route path='/login' component={Login} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users/:pageNumber?' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialized: state.app.initialized
  };
}

export default connect(mapStateToProps, {initializeApp, getAuthenticationData})(App);
