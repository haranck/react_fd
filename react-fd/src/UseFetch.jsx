import axios from "axios";
import React, { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      async function fetching() {
        try {
          setLoading(true);
          const res = await axios.get(url);
          setData(res.data);
          setLoading(false)
        } catch (error) {
          setError(error);
        }
      }
      fetching()
    },[url]);

  return {data,error,loading};
};
