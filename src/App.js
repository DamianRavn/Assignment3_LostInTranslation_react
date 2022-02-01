import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/LandingPage.js";
import TranslationPage from "./views/TranslationPage";
import Profile from "./views/Profile.js";
import NotFound from "./Components/NotFound/NotFound.js";
import Header from "./views/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
