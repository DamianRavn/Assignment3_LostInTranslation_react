import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import Translation from "./views/Translation";
import Profile from "./views/Profile.js";
import NotFound from "./views/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Translation" element={ <Translation/> } />
        <Route path="/Profile" element={ <Profile/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
