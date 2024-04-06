import { useState, useEffect } from "react";
import axios from "axios";

export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
        withCredentials: true,
      });
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
