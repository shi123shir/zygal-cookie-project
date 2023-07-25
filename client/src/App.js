import {BrowserRouter,Routes, Route} from "react-router-dom"
import UserLogin from "./componets/UserLogin";
import Home from "./componets/Home"
import Cookies from "js-cookie";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        {Cookies.get("token") ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/" element={<UserLogin />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
