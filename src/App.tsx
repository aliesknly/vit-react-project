import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Private } from "./pages/Private"
import { Provider } from "react-redux"
import store from "./redux/store"
import { PrivateRoutes, PublicRoutes } from "./models"
import { AuthGuard } from "./guards"
import { RoutesWithNoFounds } from "./utilities"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWithNoFounds>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNoFounds>
      </BrowserRouter>
    </Provider>
  )
}

export default App
