import Layout from "./layout/Layout";
import ButtonPage from "./pages/ButtonPage"
import IconPage from "./pages/IconPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputPage from "./pages/InputPage";
import TextPage from "./pages/TextPage";
import OverlayPage from "./pages/OverlayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ButtonPage />} />
          <Route path="/icon" element={<IconPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/overlay" element={<OverlayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
