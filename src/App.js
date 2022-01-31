import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/LandingPage.js";
import Translation from "./views/Translation";
import Profile from "./views/Profile.js";
import NotFound from "./Components/NotFound/NotFound.js";
import Header from './views/HeaderUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
