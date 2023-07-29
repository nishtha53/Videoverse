import { useParams } from "react-router-dom";
import { useVideos } from "../contexts/videosContext";
import { SideBar, SuggestedVideos } from "../components";
import { MdOutlineAutoDelete, MdOutlineWatchLater, } from "react-icons/md";
import { actionTypes } from "../utils/constants";
import { CgPlayListAdd } from "react-icons/cg";

import { toast } from "react-hot-toast";


export const SingleVideo = () => {
    const { videoId } = useParams();
    const {
        state: { videos },
        dispatch,
        isPresentInWatchLater
    } = useVideos();

    const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } = actionTypes;


    const currentVideo = videos?.filter((video) => video?._id === +videoId);

    console.log(currentVideo);

    return (
        <div>
            <div className="grid grid-cols-[12.5rem_1fr]">
                <SideBar />
                <div className="py-1 px-4 grid grid-cols-[1fr_23rem]">
                    <div className="border">
                        {currentVideo?.map((video) => (
                            <div>
                                <iframe
                                    src={video?.src}
                                    alt={video?.title}
                                    height="400" width="600"
                                    className="object-fit w-[100%] rounded hover:opacity-95"
                                /><br />
                                <div className="flex justify-start gap-3">
                                    <img
                                        src="https://picsum.photos/40/40"
                                        alt="creator"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <p className="text-sm font-semibold hover:text-primaryColor">
                                        {video?.title}
                                    </p>
                                    <p className="text-sm">{video?.creator}</p>
                                    </div>
                                    <div className="flex justify-end gap-3">
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
                                        <CgPlayListAdd className="text-xl cursor-pointer" />
                                        <CgPlayListAdd className="text-xl cursor-pointer" />
                                    </div>
                                    <hr />
                                    <h2>My notes</h2>
                            </div>
                        ))}
                    </div>
                    <SuggestedVideos currentVideo={currentVideo} />
                </div>
            </div>
        </div>
    );
};