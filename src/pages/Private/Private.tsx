import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { RoutesWithNoFounds } from "../../utilities";

function Private() {
   return (
      <RoutesWithNoFounds>
         <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
         <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
         <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNoFounds>
   );
}

export default Private;
