import { useParams } from "react-router-dom";
import { useGetRecepieInformation } from "../hooks/hook";
import Spinner from "./Spinner";
import Header from "./Header";

const RecepieInfo = () => {
  const params = useParams();
  const [infoData, isLoading] = useGetRecepieInformation(params.id);



  if (isLoading) return <Spinner />;

  return (
    <>
      <Header />
      <section className="bg-[#f2f2f2] h-full ">
        <div className="flex flex-col items-center justify-center mt-5 relative">
          <h1 className="text-[1.4rem] font-semibold text-[#666666]">
            {infoData.title}
          </h1>
          <img
            src={infoData.image}
            alt={infoData.title}
            className="rounded-2xl shadow-md object-contain mt-4 "
          />
          <ul className="absolute right-[18rem] top-[4rem] flex flex-col justify-center gap-3">
            <li className="flex items-center justify-between gap-2">
              <img
                src={infoData.vegan ? "/vegan.png" : "/food.png"}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xs text-[#666666]">
                {infoData.vegan ? "Vegan" : "Non Vegan"}
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <img
                src={infoData.glutenFree ? "/gluten-free.png" : "/food.png"}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xs text-[#666666]">
                {infoData.glutenFree ? "Gluten Free" : "Non Gluten Free"}
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <img
                src={infoData.dairyFree ? "/dairy-free.png" : "/food.png"}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xs text-[#666666]">
                {infoData.dairyFree ? "Dairy Free" : "Non Dairy Free"}
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <img
                src={infoData.cheap ? "/loss.png" : "/profits.png"}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xs text-[#666666]">
                {infoData.cheap ? "Cheap" : "Pricey"}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-start  justify-center gap-10 mt-5">
          <div className=" flex flex-col justify-center items-center gap-2">
            <img src="/thumbs-up.png" alt="" className="h-12 w-12" />
            <span className="text-xs text-[#666666]">
              {infoData.aggregateLikes} Likes
            </span>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <img src="/profits.png" alt="" className="h-12 w-12" />
            <span className="text-xs text-[#666666]">
              ${infoData.pricePerServing} per serving{" "}
            </span>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <img src="/clock.png" alt="" className="h-12 w-12" />
            <span className="text-xs text-[#666666]">
              Ready in {infoData.cookingMinutes} minutes{" "}
            </span>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <img src="/protection.png" alt="" className="h-12 w-12" />
            <span className="text-xs text-[#666666]">
              {" "}
              {infoData.healthScore} score of your health{" "}
            </span>
          </div>
        </div>

        <div className="px-10 mt-10">
          <h2 className="text-[#666666] text-[1.3rem] ml-10 underline">
            Extra Ingridents :-{" "}
          </h2>
          <ul className="mt-10 px-32 ml-20 grid grid-cols-4 gap-8">
            {infoData &&
              infoData?.extendedIngredients?.map((ingrident) => (
                <li
                  key={ingrident.id}
                  className="flex flex-col gap-3 items-center "
                >
                  <img
                    src={`https://img.spoonacular.com/ingredients_100x100/${ingrident.image}`}
                    alt=""
                    className="bg-transparent rounded-full mix-blend-multiply "
                  />
                  <h1 className="capitalize w-fit ">{ingrident.name} </h1>
                  <p>
                    {ingrident.amount} {ingrident.unit}
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-10 mx-20 bg-pink-200 h-fit w-fit px-5 py-2.5 rounded shadow-lg text-[#666666]">
          <div className="text-[1.2rem] underline mb-3 ">Instructions :- </div>
          <div dangerouslySetInnerHTML={{ __html: infoData.instructions }} />
          <a href={infoData.sourceUrl} className="text-blue-500" target="_blank">
            {" "}
            Source{" "}
          </a>
        </div>
        <div className="mt-10">

           
          {infoData &&
            infoData?.analyzedInstructions?.steps?.map((step) => (
              <div key={step?.id}>
                <p>{step && step?.number}</p>
                <p>{step && step?.step}</p>
              
               
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default RecepieInfo;
