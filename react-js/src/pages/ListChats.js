import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LinksChats  from '../components/Links';
import giveLastId from '../components/Chats';
import {useParams, Navigate,Routes, Route} from 'react-router-dom';
import Chats from '../components/Chats';
import { ThemeProvider} from '@mui/material/styles';
import NoChats from '../components/NoChats';

const newChatsName = () =>{
  let name ='';
  while(name === ''){
    name = prompt("Please enter chats name"); 
  };
  return name;
};

  const initialChats = [
      {
        id: 0,
        name: "Chat1",
        messages: [{id:0, text: "FirstMessage", author: 'AUTHORS.BOT' }],
      },
      {
        id:1,
        name: "Chat2",
        messages: [{id:0, text: "FirstMessageHereToo!", author: 'AUTHOR' }],
      },
    ];
    
function ListChats(props) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const { id } = useParams();
  
  const handleListItemClick = (event, index) => {
    event.preventDefault();
    setSelectedIndex(index);
  };

  const [listChats, setListChats] = useState(initialChats);

  // const addListChats = ()=> {
  //   setListChats(
  //     [...listChats,{
  //       id: giveLastId(listChats),
  //       name: newChatsName(),
  //     }]
  //   )
  // };

  // const delListChats = (id) =>{
  //   setListChats(
  //     [...listChats.filter(item => item.id !== id)]
  //   )
  // };
  console.log(id);
  if (!listChats[id]===undefined){
    if (!listChats[id]) {
      return (
      <> 
        <Navigate replace to="/nochats" />
        <Routes>
          <Route exact path={'/nochat'} element={<NoChats />}/>
        </Routes> 
      </>
      );
    }
  }
  if (listChats[id]===undefined){
    return (
      <ThemeProvider theme={props.theme} >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          }}>
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
                      <LinksChats to={'/ListChats/'+item.id} name={item.name}/>
                      <Button variant="contained" onClick={console.log('delListChats')}>
                        <DeleteForeverTwoToneIcon />
                      </Button>
                    </ListItemButton>
                  )})}
                  <Button variant="contained" sx={{ml: 15}} 
                    onClick={console.log('addListChats')}>Add chats</Button>
              </List>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={props.theme} >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        }}>
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
                    <LinksChats to={'/ListChats/'+item.id} name={item.name}/>
                    <Button variant="contained" onClick={console.log('delListChats')}>
                      <DeleteForeverTwoToneIcon />
                    </Button>
                  </ListItemButton>
                )})}
                <Button variant="contained" sx={{ml: 15}} 
                  onClick={console.log('addListChats')}>Add chats</Button>
            </List>
            <Chats messages={listChats[id].messages}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ListChats;