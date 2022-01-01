import { useEffect } from "react";
import { storeAccessToken } from "../../services/authentication";
import { useNavigate } from "react-router-dom";


const RedirectPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.hash);
    if(window.location.hash) {
      storeAccessToken();
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>Redirecting...</div>
}

export default RedirectPage;
