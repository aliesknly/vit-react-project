import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
    const userState = useSelector((store: AppStore) => store.user);
    //change the property of user what you want to validate
    return userState.name ?
        privateValidation ?
            (PrivateValidationFragment) 
            : (PublicValidationFragment) 
            : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard;