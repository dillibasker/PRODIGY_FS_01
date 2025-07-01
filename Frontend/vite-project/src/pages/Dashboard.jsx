import { useEffect, useState } from 'react';
import API from '../api';

export default function Dashboard() {
  const [data, setData] = useState('');

  useEffect(() => {
    API.get('/auth/protected')
      .then((res) => setData(res.data.message))
      .catch(() => setData('Access Denied'));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data}</p>
    </div>
  );
}
