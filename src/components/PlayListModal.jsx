import { useState } from "react";
import { useVideos } from "../contexts/videosContext";
import { actionTypes, styles } from "../utils/constants";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

export const PlayListModal = ({ currentVideo, setShowPlaylistModal }) => {
  const { state, dispatch } = useVideos();

  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [playlistInput, setPlaylistInput] = useState("");

  const { CREATE_PLAYLIST, DELETE_PLAYLIST, ADD_VIDEO_TO_PLAYLIST } =
    actionTypes;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_PLAYLIST,
      payload: { name: playlistInput, _id: uuid(), videos: [] },
    });
    toast.success("New Playlist added successfully");
    setPlaylistInput("");
    setShowPlaylistModal(false);
  };
  return (
    <div style={styles} className="py-2 px-4 bg-white">
      <h1 className="text-xl text-center">Add to Playlist</h1>
      <form className="py-3 border-b" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter title of your playlist"
          value={playlistInput}
          className="border border-textSecondary rounded py-1 px-3 text-sm"
          onChange={(e) => setPlaylistInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-3 py-1 px-3 text-sm bg-primaryColor rounded text-white hover:bg-primaryHover"
        >
          Create a New Playlist
        </button>
      </form>
      <div className="py-4 px-12">
        {state?.playlists?.map((playlist) => (
          <div
            key={playlist?._id}
            className="flex justify-between items-center cursor-pointer"
          >
            <p
              onClick={() =>
                dispatch({
                  type: ADD_VIDEO_TO_PLAYLIST,
                  payload: { currentVideo, playlist: playlist._id },
                })
              }
            >
              {playlist?.name}
            </p>
            <span
              onClick={() => {
                dispatch({ type: DELETE_PLAYLIST, payload: playlist });
                toast.success("Playlist deleted successfully!");
              }}
            >
              <RxCross2
                className="text-xl cursor-pointer"
                title="Delete playlist"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};