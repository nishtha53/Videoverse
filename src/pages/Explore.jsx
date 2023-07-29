import { SideBar, VideoCard } from "../components";
import { useVideos } from "../contexts/videosContext";

export const Explore = () => {
  const { filteredVideos } = useVideos();
  return (
    <div>
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <div className="py-1 px-4">
          <h1 className="text-2xl py-2 text-center">All Videos</h1>
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {filteredVideos.length === 0 ? (
              <p>No video match your preferences!</p>
            ) : (
              filteredVideos?.map((video) => (
                <VideoCard key={video?._id} video={video} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
