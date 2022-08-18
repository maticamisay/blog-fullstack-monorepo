import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import LoginContext from "../context/LoginContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <>
      {loading ? (
        isLoggedIn ? (
          children
        ) : (
          <Navigate to={"/login"} replace />
        )
      ) : (
        <Loader type="spokes" color="#a27b5c" />
      )}
    </>
  );
};
export default PrivateRoute;
