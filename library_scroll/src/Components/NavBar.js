import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { FlexRow } from './customComponents';
import { loggingOut } from '../actions';

function NavBar(props) {
  const visibility = props.auth ? 'visible' : 'hidden';
  const location = props.history.location.pathname
  const buttonText = location === "/" ? {link: '/admin', text: 'Edit Books'} : {link: '/', text: 'View Books'}
  console.log(buttonText);
  return (
    <FlexRow justifyBetween style={{ height: '3vh', fontSize: '0.8em' }}>
      <div></div>
      <div>
        <Link
          to="/signin"
          onClick={props.loggingOut}
          style={{ margin: '10px', color: 'white', visibility: visibility }}
        >
          Logout
        </Link>

        <Link to={buttonText.link} style={{ margin: '10px', color: 'white' }}>
          {buttonText.text}
        </Link>
      </div>
    </FlexRow>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.user.auth };
};

const connector = connect(mapStateToProps, { loggingOut });

export default connector(NavBar);
