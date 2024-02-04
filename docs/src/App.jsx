import Layout from "./layout/Layout";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import * as pages from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {Object.keys(pages).map((page, index) => (
            <Route
              key={index}
              path={page.toLocaleLowerCase().replace('page', '')}
              Component={pages[page]}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;