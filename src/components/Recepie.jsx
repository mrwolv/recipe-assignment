import { Link } from "react-router-dom";
import { useGetRecepie } from "../hooks/hook";
import Spinner from "./Spinner";

const Recepie = () => {
  const [apiData, isLoading] = useGetRecepie();

  if (isLoading) return <Spinner />;

  return (
    <div className=" container overflow-hidden mt-10 px-10">
      <div className="grid grid-cols-4 gap-10">
        {apiData &&
          apiData.map((item) => (
            <Link to={`/recepie/${item.id}`}  key={item.id}>
              <div className="bg-slate-100 w-80 h-80  flex  flex-col items-center py-5 hover:cursor-pointer shadow-lg">
                <img
                  src={item.image}
                  alt=""
                  className="h-60 w-60 object-cover hover:scale-105 transform transition-all ease-in-out duration-400 "
                />
                <h1 className="mt-3 px-5 text-[1rem] font-medium text-center ">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Recepie;
