import { CategoryCard, SideBar } from "../components";
import { useVideos } from "../contexts/videosContext";

export const Home = () => {
  const {
    state: { categories },
  } = useVideos();
  return (
    <div>
      <div className="grid grid-cols-[12.5rem_1fr]">
        <SideBar />
        <div className="py-1 px-4">
          <h1 className="text-2xl py-2 text-center">Categories</h1>
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {categories?.map((category) => (
              <CategoryCard key={category?._id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
