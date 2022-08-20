import React from 'react';
import Message from '../components/Message'
import ListChats from '../components/ListChats';
import {useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider} from '@mui/material/styles';

function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  };

function Chats(props) {
	const [messageList, setMessageList] = useState([])
  const ref = useRef(null);  
    
  const Update = (text,author) => {
    setMessageList( 
      [...messageList, {
        id: giveLastId(messageList),
        text: text,
        author: author,
      }]
    )
  };

    
  useEffect(()=> {
    setTimeout(()=>{
      bot(messageList)
    },1500);
  }, [messageList]);


  const bot = () => {
    if (messageList.length > 0){
          const authors = messageList[messageList.length - 1].author;
    if (authors) {
      alert(authors + ', сообщение отправлено!');
    };
    }
    ref.current.focus()
  };
  
  const send = (event) => {
    event.preventDefault();
    const t = event.target.text.value;
    const a = event.target.author.value;
    if (t !== '' && a !== '') 
      {
        Update(t,a);
        event.target.text.value = '';
        event.target.author.value = '';
      }
    else
      {
        alert('Вы не заполнили все поля!')
      };
  };
  return (   
		
      <ThemeProvider theme={props.theme} >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          }}>
          <Box sx={{
            width: 600,
            }}>
            <Box className='sendForm' component="form" noValidate display="flex"
                flexDirection="column" onSubmit={send} >
              <TextField
                name='text'
                id="textMessage"
                label="Сообщение"
                multiline
                rows={4}
                defaultValue=""
                inputRef={ref}
                style={{ width: 460, pt:20}}
              />
              <TextField 
                name='author'
                id="authorMessage" 
                label="Автор" 
                variant="outlined" 
              />
              <Button type='submit'>Send</Button>
            </Box>
            <div className='listMessage'>
              {messageList.map(item => {
                return(
                  <Box className='messageList' component="span" key={item.id} sx={{ p: 2, minWidth: 300,  maxWidth: 500, border: '1px dashed grey' }}   >
                  <Message item={item} />
                  </Box>
                  )
                })}
            </div>
          </Box>
          <Box>
            <ListChats />
          </Box>
        </Box>
       </ThemeProvider>
  );
}

export default Chats;