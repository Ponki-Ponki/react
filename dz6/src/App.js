import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { chatsGetSelector } from "./store/chats/chatsSelector";
import { messgeGetSelector } from "./store/message/messageSelector";


function App() {
  
  const messages = useSelector(messgeGetSelector, shallowEqual);
  const chats = useSelector(chatsGetSelector, shallowEqual);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [nameChat,setNameChat] = useState('');
  let idRandom = Math.floor(Math.random()*1000000);

  const addChat = () => {
    const id = idRandom;
    const chat = {
      idChats: id,
      nameChat: nameChat,
      messages:[],
    };
    dispatch({type: 'add_chat', payload: chat})
  }

  const deleteChat = (id) => {
    dispatch({type: 'delete_chat', payload:id})
  }

  const addMessage = () => {
    const id = idRandom;
    const message = {
      id: id,
      text: text
    };
    dispatch({type: 'add_message', payload: message})
  }
  const deleteMessage = (id) =>{
    dispatch({type: 'delete_message', payload:id})
  }
  return (
    <div>
      <input value={nameChat} onChange={event => (setNameChat(event.target.value))}/>
      <button onClick={addChat}>Add chat</button>
      {chats.map(chat => {
        return(
          <div key={chat.idChats}>
          
            <h4>
              {chat.nameChat}
              <button onClick={() => deleteChat(chat.idChats)}>Delete chat</button>
            </h4>
            
          </div>
        )})}
        {messages.map(message => {
              return (
                <div key={message.id}>
                  {message.text}
                  <button onClick={() => deleteMessage(message.id)}>Delete</button>
                </div>
              )})}
      <input value={text} onChange={event => (setText(event.target.value))}/>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
}

export default App;
