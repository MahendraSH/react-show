import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/Root-layout";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import PageNotFound from "./pages/Page-not-found";
import ShowIdPage from "./pages/Show-id-page";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:id" element={<ShowIdPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
