import { MdOutlineWatchLater } from "react-icons/md";

export const VideoCard = ({ video }) => {
  return (
    <div className="w-[20rem] border border-bgSecondary rounded hover:cursor-pointer hover:opacity-95">
      <div className="w-full relative">
        <img
          src={video?.thumbnail}
          alt={video?.title}
          className="object-cover w-full"
        />
        <div className="absolute top-0 right-0 bg-white p-1">
          <MdOutlineWatchLater className="text-xl" />
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
