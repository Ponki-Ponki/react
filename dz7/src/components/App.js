import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { chatsGetSelector } from "../redux/chats/chatsSelector";

function App() {
  const chats = useSelector(chatsGetSelector, shallowEqual);
  const dispatch = useDispatch();
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
    dispatch({type: 'delete_chat', payload:id, meta:{
      delay: 3000
    } })
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
    </div>
  );
}

export default App;
