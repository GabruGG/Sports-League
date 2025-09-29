import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSport } from "../store/slices/filterSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const { search, sport } = useSelector((s) => s.filters);
  const { sportTypes } = useSelector((s) => s.leagues);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100">
      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search league..."
        className="border p-2 rounded w-full sm:w-1/2"
      />
      <select
        value={sport}
        onChange={(e) => dispatch(setSport(e.target.value))}
        className="border p-2 rounded w-full sm:w-1/2"
      >
        <option value="All">All Sports</option>
        {sportTypes.map((sport) => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
    </div>
  );
}
