import { useNavigate } from "react-router-dom";
import { useVideos } from "../contexts/videosContext";

export const SuggestedVideos = ({ currentVideo }) => {
  const navigate = useNavigate();

  const {
    state: { videos },
  } = useVideos();

  const moreVideos = videos?.filter((video) => video?._id !== currentVideo);

  return (
    <div className="px-2">
      <h1 className="text-xl py-2">More Videos</h1>
      <div className="py-1 flex flex-col gap-3">
        {moreVideos?.slice(1, 6)?.map((video) => (
          <div
            key={video?._id}
            className="flex justify-center gap-3 cursor-pointer"
            onClick={() => navigate(`/video?${video?._id}`)}
          >
            <img
              src={video?.thumbnail}
              alt={video?.title}
              className="object-fit w-[55%] rounded hover:opacity-95"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold hover:text-primaryColor">
                {video?.title}
              </p>
              <p className="text-sm">{video?.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};