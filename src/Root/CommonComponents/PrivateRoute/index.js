import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin !== '' ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = ({ auth: { token } }) => ({
  isLogin: token
});

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLogin: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
