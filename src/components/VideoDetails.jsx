import { CheckCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFrom';
import Videos from './Videos';

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideosDetails] = useState(null);
  const [video,setVideo] = useState(null)
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setVideosDetails(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => setVideo(data.items)
    );
  }, [id]);

  if(!videoDetails?.snippet) return 'Loading....'

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

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
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:"#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color: 'gray', m1:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap="20px">
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={video} direction='column'/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
