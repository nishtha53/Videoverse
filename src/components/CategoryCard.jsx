import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded border-bgSecondary p-0.5 hover:cursor-pointer hover:opacity-90 w-[18rem]" onClick={()=> navigate(`category/${category?.category}`)}>
      <div className="w-full">
        <img
          src={category?.thumbnail}
          alt={category?.category}
          className="object-cover w-full"
        />
      </div>
      <div className="p-0.5">{category?.category}</div>
    </div>
  );
};
