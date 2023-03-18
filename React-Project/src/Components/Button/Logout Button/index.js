import "./style.css";
import { logout } from "../../../Configs/Authentication-Firebase/authentication";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";

const Logout = () => {
  const { isLoggedIn, setLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  const history = useHistory();
  const LogoutButton = () => {
    setLoggedIn(false);
    setRoleUser(null);
    history.push("/");
  };
  return (
    <button className="logout" onClick={LogoutButton}>
      Log out
    </button>
  );
};
export default Logout;
