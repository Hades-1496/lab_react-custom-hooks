import { useState, useEffect } from "react";
import axios from "axios";
// Ligeramente inspirado del proyecto semana 5.

// export const useFetch = (API) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!API) return;

//       try {
//         setLoading(true);

//         const response = await fetch(API);

//         if (!response.ok) {
//           throw new Error(`Error HTTP: ${response.status}`);
//         }

//         setData(await response.json());
//       } catch (Err) {
//         setError("Error: " + Err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [API]);

//   return { data, loading, error };
// };

// Con el axios.get

// Primera función
export function useFetch(API) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  // Segunda función
  useEffect(() => {
    // Tercera función
    const fetchData = async () => {
      if (!API) return;
      try {
        setLoading(true);
        const response = await axios.get(API);
        setError(null);

        setData(response.data);

      } catch (Err) {
        setError("Error:" + Err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API]);

  return { data, loading, error };
}
