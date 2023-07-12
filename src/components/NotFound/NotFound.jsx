const { Navigate } = require('react-router-dom');

const NotFound = () => {
  return <Navigate to="/" replace />;
};

export default NotFound;
