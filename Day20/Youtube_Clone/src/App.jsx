import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import WatchPage from "./components/WatchPage";
import History from "./components/History";
import Trending from "./components/Trending";
import Gaming from "./components/Gaming";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="watch/:id" element={<WatchPage />} />
        <Route path="history" element={<History />} />
        <Route path="trending" element={<Trending />} />
        <Route path="gaming" element={<Gaming />} />
      </Route>
    </Routes>
  );
}
