import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/partials/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
