import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import giveLastId from '../pages/Chats'

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
    },
    {
      id: 2,
      nameChats: '3 Chats',
    },
    {
      id: 3,
      nameChats: '4 Chats',
    },
    {
      id: 4,
      nameChats: '5 Chats',
    },
    {
      id: 5,
      nameChats: '6 Chats',
    }
  ]);


  
  // const addListChats = ()=> {
  //   setListChats(
  //     [...listChats,{
  //       id: giveLastId(listChats),
  //       name: prompt("Please enter chats name"),
  //     }]
  //   )
  // };
  const delListChats = (id) =>{
    setListChats(
      [...listChats.filter(item => item.id !== id)]
    )
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {listChats.map(item => {
          return(
            <ListItemButton
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}
              key={item.id}
              >
              <ListItemIcon>
                <EmailIcon/>
              </ListItemIcon>
              <ListItemText primary={item.nameChats} />
                <Button variant="contained" onClick={delListChats(item.id)}>
                  <DeleteForeverTwoToneIcon />
                </Button>
          </ListItemButton>
          )})}
          <Button variant="contained" sx={{
            ml: 15}} 
            onClick={''}>Add chats</Button>
      </List>
    </Box>
  );
}

export default ListChats;