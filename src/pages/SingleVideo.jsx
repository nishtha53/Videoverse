import { useParams } from "react-router-dom";
import { useVideos } from "../contexts/videosContext";
import { SideBar, SuggestedVideos } from "../components";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const {
    state: { videos },
    dispatch,
  } = useVideos();

  const currentVideo = videos?.filter((video) => video?._id === +videoId);

  console.log(currentVideo);

  return (
    <div>
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <div className="py-1 px-4 grid grid-cols-[1fr_23rem]">
          <div className="border"></div>
          <SuggestedVideos currentVideo={currentVideo} />
        </div>
      </div>
    </div>
  );
};