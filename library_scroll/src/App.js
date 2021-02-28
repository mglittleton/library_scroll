import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import { getBooks } from './actions';
import Scroll from './Components/Scroll';
import NavBar from './Components/NavBar';
import SignIn from './Components/User/SignIn';
import Admin from './Components/Admin';
import Register from './Components/User/Register';
import ProtectedRoute from './Components/User/ProtectedRoute';

class App extends Component {
  componentDidMount() {
    const { getBooks, isbnNums } = this.props;
    getBooks(isbnNums);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <ProtectedRoute exact path="/" component={Scroll} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/signin/" render={(props) => <SignIn {...props} />} />
          <Route
            path="/register/"
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isbnNums: state.isbnNums,
  };
};

const connector = connect(mapStateToProps, { getBooks });

export default connector(App);

/*
// NOTE list of books that are hard coded so the site works with no back end. It will be replaced by a database once the second stage is complete.
*/

const devBooks = [
  9781534437333,
  9781627791151,
  9781532118517,
  9780545723336,
  9781338255720,
  9781681199498,
  9780823438686,
  9781368013840,
  9780545946179,
  9781338129304,
  9781368039932,
  9781338157796,
  9781338159318,
];
