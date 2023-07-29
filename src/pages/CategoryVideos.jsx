import { useParams } from "react-router-dom";
import { SideBar, VideoCard } from "../components";
import { useVideos } from "../contexts/videosContext";

export const CategoryVideos = () => {
  const { categoryName } = useParams();
  const {
    state: { videos },
  } = useVideos();

  const filteredVideos = videos?.filter(
    (video) => video?.category === categoryName
  );

  return (
    <div>
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <div className="py-1 px-4">
          <h1 className="text-2xl py-2 text-center">{categoryName} Videos</h1>
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {filteredVideos?.map((video) => (
              <VideoCard key={video?._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
