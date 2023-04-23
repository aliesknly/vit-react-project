import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { createUser } from "../../redux/states/user.slice"

function Login() {
  const dispatch = useDispatch()

  const Login = async () => {
    try {
      const result = await getMorty()
      dispatch(createUser(result))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={Login}>Login</button>
    </>
  )
}
export default Login


