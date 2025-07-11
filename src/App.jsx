import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import APIFetchPage from './pages/APIFetchPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<APIFetchPage />} />
      </Routes>
    </Layout>
  );
}

export default App;