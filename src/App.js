import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navigation from "./components/partials/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // set the background color for the whole app.
  document.body.className = "bg-secondary";

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
