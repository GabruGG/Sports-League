import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBadge } from "../store/slices/leagueSlice";

const LeagueBadge = () => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();
  const { selectedLeague, selectedBadge} = useSelector(s=>s.leagues);
  useEffect(() => {

    if (leagueId){
        
        dispatch(fetchBadge(leagueId));
    } 
  }, [leagueId]);
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="p-1.5">
             <h3 className="font-semibold">{selectedLeague?.strLeague}</h3>
    <p className="text-sm text-gray-700">{selectedLeague?.strSport}</p>
        </div>
   

    {selectedBadge && (
        <div className="mt-2 text-center">
          <h4 className="font-semibold mb-2">Season Badge</h4>
          <img
            src={selectedBadge}
            alt="Season badge"
            className="mx-auto h-24"
          />
        </div>
      )}
    </div>
  );
};

export default LeagueBadge;
