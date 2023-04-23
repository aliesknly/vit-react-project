import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";

export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard;