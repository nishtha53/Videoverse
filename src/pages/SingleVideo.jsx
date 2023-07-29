import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useVideos } from "../contexts/videosContext";
import { SideBar, SuggestedVideos } from "../components";
import { MdOutlineAutoDelete, MdOutlineWatchLater, } from "react-icons/md";
import { actionTypes } from "../utils/constants";
import { CgPlayListAdd } from "react-icons/cg";

import { toast } from "react-hot-toast";


export const SingleVideo = () => {
    const { videoId } = useParams();
    const [newNote, setNewNote] = useState('');
    const {
        state,
        dispatch,
        isPresentInWatchLater
    } = useVideos();

    const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER,ADD_NOTE,DELETE_NOTE,UPDATE_NOTE } = actionTypes;


    const currentVideo = state.videos?.filter((video) => video?._id === +videoId);

    const handleAddNote = () => {
        const note = {
          id: Date.now(),
          content: newNote,
        };
    
        dispatch({ type: ADD_NOTE, payload: note });
        setNewNote('');
      };

      const handleEditNote = (id, content) => {
        // Logic to update the note (similar to handleAddNote)
        dispatch({ type: UPDATE_NOTE, payload: { id, content } });
      };
    
      const handleDeleteNote = (id) => {
        dispatch({ type: DELETE_NOTE, payload: id });
      };

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
                                    <>
                                    <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">My Notes</h2>
                                    <div className="flex mb-4">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l w-full focus:outline-none focus:border-primaryColor"
            placeholder="Enter your note..."
          />
          <button
            onClick={handleAddNote}
            className="px-4 py-2 bg-primaryColor text-white rounded-r focus:outline-none"
          >
            Add Note
          </button>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Notes:</h2>
          <ul>
            {state.notes.map((note) => (
              <li key={note.id} className="mb-2">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded">
                  <p className="flex-grow">{note.content}</p>
                  <div>
                    <button
                      onClick={() => handleEditNote(note.id, 'Updated Note')}
                      className="text-sm text-primaryColor mr-2 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="text-sm text-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
                                    </>
                                                
                                </div>
                        ))}
                    </div>
                    <SuggestedVideos currentVideo={currentVideo} />
                </div>
            </div>
        </div>
    );
};