import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFounds } from "../../utilities";
import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"))


function Private() {
   return (
      <RoutesWithNotFounds>
         <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
         <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      </RoutesWithNotFounds>
   );
}

export default Private;
