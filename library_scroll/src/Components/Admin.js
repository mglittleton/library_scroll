import {Link} from 'react-router-dom'

function Admin() {
  return (
    <div>
      Go to the
      <Link to='/' style={{color: 'white'}} > scroll </Link>
      page
    </div>
  );
}

export default Admin;