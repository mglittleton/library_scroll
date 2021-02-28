import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      Go to the
      <Link to="/" style={{ color: 'white' }}>
        {' '}
        admin{' '}
      </Link>
      page
    </div>
  );
}

export default Register;
