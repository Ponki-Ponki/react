import './App.css';
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
  
    const Update = ({text,author}) => {
      setMessageList(  
        messageList.push({
          key: messageList[messageList.length -1].key +1,
          text: {text},
          author: {author},
        })
      )
    }
  const text = useRef();
  const author = useRef();

  return (
    <div className='root'>
      
    
    <div className='listMessage'>
      <div>
        <input ref={text} type="text" className='text' />
        <div className='authorSend'>
          <input ref={author} type="text" className='author'/>
          <button onClick={Update({text: text.current, author: author.current})}>Send</button>
        </div>
      </div>
    {messageList.map((item) => {
      return(
        <div className='message' key={item.key}>
          <p className='textMessage'>{item.text}</p>
          <p className='authorMessage'>{item.author}</p>
        </div>
      )
    })}
    </div>
    </div>
  );
}

export default App;