import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdCompass } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

export const SideBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: " #8553fa48",
  };
  return (
    <aside className="sticky flex flex-col justify-between h-[90vh] top-0 left-0 overflow-y-none overflow-x-hidden items-center border-r border-primaryDisabled">
      <ul className="flex items-start justify-start flex-col gap-1 tracking-wide grow">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4"
          >
            <IoMdHome className="text-2xl mr-2.5" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4"
          >
            <IoMdCompass className="text-xl mr-2.5" />
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4"
          >
            <FaFolderPlus className="text-xl mr-2.5" />
            <span>Playlists</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlater"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4"
          >
            <MdWatchLater className="text-xl mr-2.5" />
            <span>Watch Later</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
