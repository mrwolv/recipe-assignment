import { useEffect, useState } from "react";

export function useGetRecepie() {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://api.spoonacular.com/recipes/complexSearch";

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(url, {
          method: "GET",
          withCredentials: true,
          headers: {
            "x-api-key": "296847a539914ec38a5e0fa74567fe6c",
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("APi is not ok");
        }
        const data = await res.json();
        // console.log(data);
        setIsLoading(false);
        setApiData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return [apiData, isLoading];
}

export function useGetRecepieInformation(id) {
  const [infoData, setInfoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.spoonacular.com/recipes/${id}/information`;

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(url, {
          method: "GET",
          withCredentials: true,
          headers: {
            "x-api-key": "296847a539914ec38a5e0fa74567fe6c",
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("APi is not ok");
        }
        const data = await res.json();
        console.log("Recepie info",data);
        setIsLoading(false);
        setInfoData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

  return [infoData, isLoading];
}
