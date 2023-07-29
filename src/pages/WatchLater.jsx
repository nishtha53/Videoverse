import { Header, SideBar } from "../components";

export const WatchLater = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <h1>Watch</h1>
      </div>
    </div>
  );
};
