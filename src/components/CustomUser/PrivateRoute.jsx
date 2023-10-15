import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, allowedRoles, userRole ,userPath}) => {
    console.log("Path:", userPath);
  if (allowedRoles.includes(userRole)) {
    return element;
  } else {

    return <Navigate to={`${userPath}`} />;
  }
};

export default PrivateRoute;

