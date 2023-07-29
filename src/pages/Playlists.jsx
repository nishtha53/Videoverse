import { SideBar, PlayListModal } from "../components";
import { useVideos } from "../contexts/videosContext";
import { BiSolidTrashAlt } from "react-icons/bi";
import { actionTypes } from "../utils/constants";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "@mui/material";

export const Playlists = () => {
  const {
    state: { playlists },
    dispatch,
  } = useVideos();

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const { DELETE_PLAYLIST } = actionTypes;

  return (
    <div>
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <div className="py-1 px-4">
          <h1 className="text-2xl py-2 text-center">All Playlists</h1>
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {playlists?.length > 0 &&
              playlists?.map((playlist) => (
                <div
                  key={playlist?._id}
                  className="w-[10rem] h-[10rem] border border-bgSecondary rounded flex flex-col items-center justify-center gap-3 py-2"
                >
                  <p>{playlist?.name}</p>
                  <p>{playlist?.videos?.length}</p>
                  <p
                    onClick={() =>
                      dispatch({
                        type: DELETE_PLAYLIST,
                        payload: playlist,
                      })
                    }
                  >
                    <BiSolidTrashAlt
                      className="text-2xl cursor-pointer"
                      title="Delete playlist"
                    />
                  </p>
                </div>
              ))}
            <div className="w-[10rem] h-[10rem] border border-bgSecondary rounded flex items-center justify-center py-2">
              <span onClick={() => setShowPlaylistModal(true)}>
                <AiOutlinePlusCircle
                  className="text-[2rem] cursor-pointer"
                  title="Add a playlist"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {showPlaylistModal && (
        <Modal
          open={showPlaylistModal}
          onClose={() => setShowPlaylistModal(false)}
        >
          <>
            <PlayListModal setShowPlaylistModal={setShowPlaylistModal} />
          </>
        </Modal>
      )}
    </div>
  );
};
