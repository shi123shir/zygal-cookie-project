import {BrowserRouter,Routes, Route} from "react-router-dom"
import UserLogin from "./componets/UserLogin";
import Home from "./componets/Home"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
