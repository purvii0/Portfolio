import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/" />
      </Routes>
    </div>
  );
}

export default App;
