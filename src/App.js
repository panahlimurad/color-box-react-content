import SettingsPage from "./components/SettingsPage/SettingsPage";
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Home from "./components/HomePage/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="settings" element={<SettingsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
