import { useState, useEffect } from "react";
import axios from "axios";
// Ligeramente inspirado del proyecto semana 5.

// Primera función
export function useFetch(API) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  if (!API) return;
  // Segunda función
  useEffect(() => {
    // Tercera función
    const fetchData = async () => {
      if (!API) return;
      try {
        setLoading(true);
        const response = await axios.get(API);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        setData(response.data);
      } catch (Err) {
        setError("Error:" + Err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API]);

  return { data, loading, error };
}

