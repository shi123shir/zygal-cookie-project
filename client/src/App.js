import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./componets/UserLogin";
import Home from "./componets/Home"
import Cookies from "js-cookie";



function App() {
   const isLoggedIn = Cookies.get("token");
   console.log(isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to= "/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
