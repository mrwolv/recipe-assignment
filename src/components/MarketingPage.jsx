import { useNavigate} from "react-router-dom";

const MarketingPage = () => {

    const navigate = useNavigate() 

  return (
    <section className="flex justify-center items-center h-screen overflow-hidden">
      <div>
        <img
          src="/receipie.jpg"
          alt=""
          className="h-full w-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  flex-col ">
          <h1 className="text-center text-[3rem] text-yellow-300 font-semibold">
            Check Recepies Here
          </h1>

          <button className="mt-3 bg-white px-7 py-2.5 rounded-md text-[1.1rem ] active:scale-95"
          onClick={()=>navigate("/home")}
          >
            check here
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingPage;
