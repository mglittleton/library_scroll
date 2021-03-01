import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FlexColumn } from '../customComponents';
import { connect } from 'react-redux';

import { loggingIn, changeAuth } from '../../actions';

function SignIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    if (props.auth) {
      props.history.push('/admin');
    }
  });

  const checkLogIn = (e) => {
    const user = e.target.username.value;
    const pass = e.target.password.value;
    props.loggingIn(user, pass);
    e.preventDefault();
  };

  return (
    <FlexColumn alignCenter width="full" spaceTop="70px">
      <FlexColumn
        alignCenter
        justifyAround
        width="40%"
        height="50vh"
        style={{
          backgroundColor: '#1a1b1c',
          paddingTop: '2%',
        }}
      >
        <form onSubmit={checkLogIn}>
          <FlexColumn spaceBottom="30px" justifyBetween alignCenter>
            Username:
            <input
              type="text"
              name="username"
              autoFocus={true}
              value={username}
              onChange={(v) => {
                setUsername(v.target.value);
              }}
            />
          </FlexColumn>

          <FlexColumn spaceBottom="30px" justifyBetween alignCenter>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(v) => {
                setPassword(v.target.value);
              }}
            />
          </FlexColumn>
          <input type="submit" value="Log In" />
        </form>
        <div className="error-box">{statusMessage.message}</div>
        <div>Click here to register</div>
      </FlexColumn>
    </FlexColumn>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.auth,
  };
};

const connector = connect(mapStateToProps, { loggingIn, changeAuth });

export default connector(SignIn);
