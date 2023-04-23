import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { PrivateRoutes, PublicRoutes, Roles } from "./models"
import { AuthGuard, RolGuard } from "./guards"
import { RoutesWithNotFounds } from "./utilities"
import { Suspense, lazy } from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import { Logout } from "./components"
import { Dashboard } from "./pages/Private"

const Login = lazy(() => import("./pages/Login/Login"))
const Private = lazy(() => import("./pages/Private/Private"))
const Home = lazy(() => import("./pages/Public/Home/Home"))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Logout />
          <RoutesWithNotFounds>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route element={<RolGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
            <Route element={<RolGuard rol={Roles.USER} />}>
              <Route path={PrivateRoutes.HOME} element={<Home />} />
            </Route>
          </RoutesWithNotFounds>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App
