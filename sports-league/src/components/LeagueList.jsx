import { useDispatch, useSelector } from "react-redux";
import { selectLeague } from "../store/slices/leagueSlice";
import { useNavigate } from "react-router-dom";

export default function LeagueList() {
  const dispatch = useDispatch();
  const { search, sport } = useSelector((s) => s.filters);
  const navigate = useNavigate();

  const { data: leagues, status } = useSelector((s) => s.leagues);

  if (status === "loading")
    return <div className="text-center mt-6">Loading…</div>;

  const filtered = leagues.filter(
    (l) =>
      l.strLeague.toLowerCase().includes(search.toLowerCase()) &&
      (sport === "All" || l.strSport === sport)
  );

  function showBadge(league) {
    dispatch(selectLeague(league));
    navigate(`/league/${league.idLeague}`);
  }

  return (
    <div className="p-4">
      <p className="mb-4 text-sm text-gray-600">
        Live: {filtered.length} leagues
      </p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((l) => (
          <li
            key={l.idLeague}
            onClick={() => showBadge(l)}
            className="cursor-pointer border rounded p-4 hover:bg-gray-300"
          >
            <h3 className="font-semibold">{l.strLeague}</h3>
            <p className="text-sm text-gray-700">{l.strSport}</p>
            {l.strLeagueAlternate && (
              <p className="text-xs text-gray-500">{l.strLeagueAlternate}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
