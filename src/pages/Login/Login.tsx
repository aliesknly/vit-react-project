import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser, resetUser } from "../../redux/states/user.slice";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const result = await getMorty();
      //delete the role object from the result because it is not neede
      dispatch(createUser({ ...result, rol: Roles.USER }));
      
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, [dispatch, navigate]);

  return (
    <>
      <h1>Login</h1>
      <button onClick={Login}>Login</button>
    </>
  );
}
export default Login;
