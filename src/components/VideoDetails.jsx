import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFrom';

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideosDetails] = useState(null);
  console.log(videoDetails);
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setVideosDetails(data.items[0])
    );
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography variant='h5' color='#fff' p={2} fontWeight='bold'>
              {videoDetails?.snippet?.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
