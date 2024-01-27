import { useEffect, useState } from 'react';
import { API_URL } from '../../../config/api';

const getGames = (platform: string, category: string, sortBy: string) => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `${API_URL}/games?platform=${platform}&category=${category}&sort-by=${sortBy}`,
      { method: 'GET' },
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [platform, category, sortBy]);

  return { result, isLoading };
};

export default getGames;
