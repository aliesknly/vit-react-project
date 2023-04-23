import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user.slice";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../models";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={Login}>Login</button>
    </>
  );
}
export default Login;
