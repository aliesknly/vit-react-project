import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/states/user.slice"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"


function Logout() {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const logOut = () => {
        dispatch(resetUser())
        navigate(`${PublicRoutes.LOGIN}`)
    }
    return (
        <button onClick={logOut}>Logout</button>
    )
}
export default Logout