import { Link } from 'react-router-dom';
import { FlexRow } from './customComponents';

function NavBar() {
  return (
    <FlexRow justifyBetween style={{ height: '3vh', fontSize: '1em' }}>
      <div></div>
      <Link to="/admin" style={{ color: 'white' }}>
        Edit Titles
      </Link>
    </FlexRow>
  );
}

export default NavBar;
