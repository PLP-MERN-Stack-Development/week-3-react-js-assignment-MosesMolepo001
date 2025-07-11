import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

const APIFetchPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">API Data</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <Button variant="primary" onClick={fetchData}>Reload</Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="space-y-4">
        {filteredData.slice(0, 10).map(item => (
          <li key={item.id} className="p-4 border rounded-lg bg-white dark:bg-gray-800">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIFetchPage;
