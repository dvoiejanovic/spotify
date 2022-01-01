import { useEffect } from "react";
import { storeAccessToken } from "../../services/authentication";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      storeAccessToken();
      navigate("/");
    } else {
      navigate("/splash");
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
