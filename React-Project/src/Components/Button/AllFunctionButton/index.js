import { UserContext } from "../../../UserContext";
import { useContext } from "react";
import Logout from "../Logout Button";
import SignInSignUpButton from "../Sign in - Sign up Button";
const AllFunctionButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { roleUser, setRoleUser } = useContext(UserContext);
  setRoleUser(roleUser);

  return (
    <span>
      {isLoggedIn === true ? (
        <div className="button">
          <Logout />
        </div>
      ) : (
        <div className="button">
          <SignInSignUpButton />
        </div>
      )}
    </span>
  );
};

export default AllFunctionButton;
