import { Stack } from '@mui/system';
import React from 'react';
import { categories } from '../utils/constants';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {/* <button>
      <span>New</span>
      <span>{<HomeIcon/>}</span>
    </button> */}
    {categories.map(category => (
      <button>
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
