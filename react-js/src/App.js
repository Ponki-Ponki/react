import './App.css';
import Message from './Message';
import {useEffect, useRef, useState} from 'react';

function App() {
  const [messageList, setMessageList] = useState([{
        key: 1,
        text: 'sdgasdgasgasdafsdfasd',
        author: 'a1',
      },
      {
        key: 2,
        text: 'asdglkasldafbskdnfkasbdjfbkjas',
        author: 'a2',
      }]);
  
  useEffect((item)=>{
      const Update = ({text,author}) => {
        messageList.push({
          key: messageList[messageList.length -1].key +1,
          text: {text},
          author: {author},
      });
    }
  },[messageList])

  const text = useRef();
  const author = useRef();

  return (
    <div class='root'>
      
    
    <div class='listMessage'>
      <div>
        <input ref='text' type="text" class='text' />
        <div class='authorSend'>
          <input ref='author' type="text" class='author'/>
          <button onClick={Update({text: text.current.text, author: author.current.text})}>Send</button>
        </div>
      </div>
    {messageList.map((item) => {
      return(
        <div class='message' key={item.key}>
          <p class='textMessage'>{item.text}</p>
          <p class='authorMessage'>{item.author}</p>
        </div>
      )
    })}
    </div>
    </div>
  );
}

export default App;