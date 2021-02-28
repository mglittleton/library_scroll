import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = () => {
    axios.defaults.headers.common['Authorization'] =
      localStorage.getItem('authToken') || null;
    /*if setting null does not remove `Authorization` header then try
        delete axios.defaults.headers.common['Authorization'];
      */
    return Boolean(localStorage.getItem('authToken'));
  };
  return (
    <Route
      {...rest}
      render={(props) => isAuthorized() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
