import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChannelDetail from './components/ChannelDetail';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetails from './components/VideoDetails';
import Feed from './components/Feed';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
