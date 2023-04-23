import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFounds } from "../../utilities";
import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"))
const Home = lazy(() => import("./Home/Home"))

// const Private = () => (

function Private() {
   return (
      <RoutesWithNotFounds>
         <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
         <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
         <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFounds>
   );
}

export default Private;
