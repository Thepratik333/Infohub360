import React, { useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import News from './newsCompo/News';


const NewsApp = () => {
  const [progress, setProgress] = useState(0);
  const setProgressHandler = (progress) => {
    setProgress(progress);
  };

  let apikey = "57a6a31f0a3f4d98a8383d252279d3a6";
  

  return (
    <>
      <LoadingBar color='#f11946' progress={progress} />
      <Routes>
        <Route path="/" element={<News setProgress={setProgressHandler} apikey={apikey} key="general" country='in' pageSize={8} category="general" />} />
        <Route path="business" element={<News setProgress={setProgressHandler} apikey={apikey} key="business" country='in' pageSize={8} category="business" />} />
        <Route path="entertainment" element={<News setProgress={setProgressHandler} apikey={apikey} key="entertainment" country='in' pageSize={8} category="entertainment" />} />
        <Route path="health" element={<News setProgress={setProgressHandler} apikey={apikey} key="health" country='in' pageSize={8} category="health" />} />
        <Route path="science" element={<News setProgress={setProgressHandler} apikey={apikey} key="science" country='in' pageSize={8} category="science" />} />
        <Route path="sports" element={<News setProgress={setProgressHandler} apikey={apikey} key="sports" country='in' pageSize={8} category="sports" />} />
        <Route path="technology" element={<News setProgress={setProgressHandler} apikey={apikey} key="technology" country='in' pageSize={8} category="technology" />} />
      </Routes>

    </>
  );
};

export default NewsApp;
