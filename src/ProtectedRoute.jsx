import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');
  if(!token) return <Navigate to="/" />
  return  children ;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
