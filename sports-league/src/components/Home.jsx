import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import LeagueList from "./LeagueList";
import { useEffect } from "react";
import { fetchLeagues } from "../store/slices/leagueSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: leagues, status } = useSelector((s) => s.leagues);

  useEffect(() => {
    if (status === "") {
      dispatch(fetchLeagues());
    }
  }, [status]);
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-center mt-4 mb-2">
        Sports Leagues
      </h1>
      <Filters />
      <LeagueList />
    </div>
  );
};

export default Home;
