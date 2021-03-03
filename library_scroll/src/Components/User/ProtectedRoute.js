import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = () => {
    axios.defaults.headers.common['Authorization'] =
      localStorage.getItem('authToken') || null;
    return Boolean(localStorage.getItem('authToken'));
  };
  return (
    <Route
      {...rest}
      render={(props) => isAuthorized() || rest.stay && !isAuthorized() ? <Component landPage={rest.landPage} {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;