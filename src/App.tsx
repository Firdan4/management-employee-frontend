import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
