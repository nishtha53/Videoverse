import { MdOutlineAutoDelete, MdOutlineWatchLater } from "react-icons/md";
import { useVideos } from "../contexts/videosContext";
import { actionTypes } from "../utils/constants";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const { dispatch, isPresentInWatchLater } = useVideos();

  const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } = actionTypes;

  return (
    <div className="w-[20rem] border border-bgSecondary rounded">
      <div className="w-full relative">
        <img
          src={video?.thumbnail}
          alt={video?.title}
          className="object-cover w-full hover:cursor-pointer hover:opacity-95"
          onClick={() => navigate(`/video/${video?._id}`)}
        />
        <div className="absolute top-0 right-0 bg-white p-1">
          {isPresentInWatchLater(video) ? (
            <span
              onClick={() => {
                dispatch({ type: REMOVE_FROM_WATCH_LATER, payload: video });
                toast.success("Video removed from watch later.");
              }}
            >
              <MdOutlineAutoDelete
                className="text-xl cursor-pointer"
                title="Remove from Watch Later"
              />
            </span>
          ) : (
            <span
              onClick={() => {
                dispatch({ type: ADD_TO_WATCH_LATER, payload: video });
                toast.success("Video added to watch later.");
              }}
            >
              <MdOutlineWatchLater
                className="text-xl cursor-pointer"
                title="Add to Watch Later"
              />
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-2 px-1 py-2">
        <img
          src="https://picsum.photos/40/40"
          alt="creator"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col gap-1 ">
          <p className="text-sm font-semibold">{video?.title}</p>
          <p className="text-sm">{video?.category}</p>
          <p className="text-[0.75rem]">
            {video?.views} views | {video?.creator}
          </p>
        </div>
      </div>
    </div>
  );
};
