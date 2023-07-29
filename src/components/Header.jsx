import { Link, useNavigate } from "react-router-dom";
import { GrCirclePlay, GrSearch } from "react-icons/gr";
import { useVideos } from "../contexts/videosContext";
import { actionTypes } from "../utils/constants";

export const Header = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useVideos();

  const { SET_SEARCH_INPUT } = actionTypes;

  return (
    <div className="bg-white py-4 flex items-center justify-around sticky top-0 z-20">
      <Link to="/" className="flex items-center gap-0.5 text-2xl">
        <GrCirclePlay className="text-2xl text-primaryColor" />
        <h1>
          <span className="text-primaryColor">Crafty</span>Creations
        </h1>
      </Link>
      <div className="border rounded flex items-center px-1 gap-2">
        <GrSearch className="text-lg text-[lightGray]" />
        <input
          type="text"
          placeholder="Search videos..."
          value={state?.searchInput}
          className="outline-none py-1 rounded text-sm"
          onChange={(e) => {
            navigate("/explore");
            dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
