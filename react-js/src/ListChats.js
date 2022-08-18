import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import {useState} from 'react';

function ListChats() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [listChats, setListChats] = useState([
    {
      id: 0,
      nameChats: '1 Chats',
    },
    {
      id: 1,
      nameChats: '2 Chats',
    }
  ]);


  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <EmailIcon/>
          </ListItemIcon>
          <ListItemText primary="1 Chats" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="2 Chats" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <EmailIcon/>
          </ListItemIcon>
        <ListItemText primary="3 Chats" />
        </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
          <ListItemIcon>
            <EmailIcon/>
          </ListItemIcon>
          <ListItemText primary="4 Chats" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default ListChats;