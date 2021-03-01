import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FlexColumn } from '../customComponents';
import { connect } from 'react-redux';
import { loggingIn } from '../../actions';

function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [statusMessage, setStatusMessage] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    if (props.auth) {
      props.history.push('/admin');
    }
  });

  const checkRegister = (e) => {
    e.preventDefault();
    if (password != checkPass) {
      setStatusMessage({ status: false, message: 'Passwords do not match' });
      return;
    }
    const user = e.target.username.value;
    const pass = e.target.password.value;
    const message = props.loggingIn(user, pass);
    setStatusMessage(message);
  };

  return (
    <FlexColumn alignCenter width="full" spaceTop="70px">
      <FlexColumn
        alignCenter
        justifyBetween
        width="40%"
        height="50vh"
        style={{
          backgroundColor: '#1a1b1c',
          paddingTop: '2%',
        }}
      >
        <form onSubmit={checkRegister}>
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

          <FlexColumn spaceBottom="30px" justifyBetween alignCenter>
            Retype Password:
            <input
              type="password"
              name="checkPass"
              value={checkPass}
              onChange={(v) => {
                setCheckPass(v.target.value);
              }}
            />
          </FlexColumn>
          <input type="submit" value="Register" />
        </form>
        <div className="error-box">{statusMessage.message}</div>
        <Link to='/signin' style={{ marginBottom: "20px", color: 'white' }}>Already have an account?</Link>
      </FlexColumn>
    </FlexColumn>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.auth,
  };
};

const connector = connect(mapStateToProps, { loggingIn });

export default connector(Register);
