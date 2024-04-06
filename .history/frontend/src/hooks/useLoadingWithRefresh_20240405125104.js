import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );
        console;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const refreshPage = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  return { loading, refresh, refreshPage };
}
