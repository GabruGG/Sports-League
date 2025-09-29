import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LeagueBadge from "./components/LeagueBadge";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league/:leagueId" element={<LeagueBadge />} />
      </Routes>
    </>
  );
}
