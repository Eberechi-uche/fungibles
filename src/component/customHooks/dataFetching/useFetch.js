import { useState, useEffect } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const validateQuerry = (querryData) => {
    if (querryData.length < 23) {
      setError("not a valid address");
      return;
    }
  };

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for the resourse");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        isPending(false);
        setError(null);
      })
      .catch((error) => {
        isPending(false);
        setError(error.message);
      });
  }, [api]);
  return { data, isPending, error, validateQuerry };
};
export default useFetch;
