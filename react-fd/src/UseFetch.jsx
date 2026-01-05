import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState(()=>{
    const stored = localStorage.getItem('users')
    return stored ? JSON.parse(stored) : []
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if(data.length > 0)return
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [url,data]);

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(data))
  },[data])

  return { data, loading, error, setData };
}

export default UseFetch;
