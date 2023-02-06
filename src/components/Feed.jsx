import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright {year} @Krisnadev7 made with ❤️
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          fontWeight={'bold'}
          variant='h4'
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
