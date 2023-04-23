import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./models"
import { AuthGuard } from "./guards"
import { RoutesWithNotFounds } from "./utilities"
import { Suspense, lazy } from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import { Logout } from "./components"

const Login = lazy(() => import("./pages/Login/Login"))
const Private = lazy(() => import("./pages/Private/Private"))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Logout />
          <RoutesWithNotFounds>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFounds>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App
