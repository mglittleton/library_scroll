import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      Go to the
      <Link to="/register" style={{ color: 'white' }}>
        {' '}
        register{' '}
      </Link>
      page
    </div>
  );
}

export default SignIn;
