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
        {listChats.map(item => {
          return(
            <ListItemButton
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, 0)}
              key={item.id}
              >
              <ListItemIcon>
                <EmailIcon/>
              </ListItemIcon>
              <ListItemText primary={item.nameChats} />
          </ListItemButton>
          )
        })}
      </List>
    </Box>
  );
}

export default ListChats;