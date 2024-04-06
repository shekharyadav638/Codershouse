import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Authenticate from "./Pages/Authenticate/Authenticate";
import Activate from "./Pages/Activate/Activate";
import Rooms from "./Pages/Rooms/Rooms";
import { useSelector } from "react-redux";

const isAuth = useSelector((state) => state.auth.isAuth);

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  return isAuth ? (
    <Navigate
      to={{
        pathname: "/rooms",
      }}
    />
  ) : (
    <>{children}</>
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  return !isAuth ? (
    <Navigate to={{ pathname: "/" }} />
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate to={{ pathname: "/rooms" }} />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  return !isAuth ? (
    <Navigate to={{ pathname: "/" }} />
  ) : isAuth && !user.activated ? (
    <Navigate to={{ pathname: "/activate" }} />
  ) : (
    children
  );
};

export default App;
