import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useAxiosFetch = (dataURL) => {
  const [data, setData] = useState([]);
  const [fetchError, setFeetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {cancelToken: source.token});
        if(isMounted) {
          setData(response.data);
          setFeetchError(null);
        }
      } catch(err) {
        if(isMounted) {
          setFeetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(()=> setIsLoading(false), 2000);
      }
    }


    fetchData(dataURL)
  }, [])
}

export default useAxiosFetch