import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LinksChats  from './Links'
import giveLastId from '../pages/Chats'

const newChatsName = () =>{
  let name ='';
  while(name === ''){
    name = prompt("Please enter chats name"); 
  };
  return name;
};

function ListChats() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    event.preventDefault();
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


  
  const addListChats = ()=> {
    setListChats(
      [...listChats,{
        id: giveLastId(listChats),
        name: newChatsName(),
      }]
    )
  };

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
              key={item.id}>
              <ListItemIcon>
                <EmailIcon/>
              </ListItemIcon>
              <LinksChats to={''} name={item.nameChats}/>
              <Button variant="contained" onClick={delListChats(item.id)}>
                <DeleteForeverTwoToneIcon />
              </Button>
            </ListItemButton>
          )})}
          <Button variant="contained" sx={{ml: 15}} 
            onClick={addListChats()}>Add chats</Button>
      </List>
    </Box>
  );
}

export default ListChats;