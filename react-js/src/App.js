import './App.css';
import Message from './Message'
import {useEffect, useRef, useState} from 'react';

function App() {
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      text: 'sdgasdgasgasdafsdfasd',
      author: 'a1',
    },
    {
      id: 2,
      text: 'asdglkasldafbskdnfkasbdjfbkjas',
      author: 'a2',
    }
  ])
    
    
  const Update = ({text ,author}) => {
    setMessageList(  
      messageList.push({
        id: messageList[messageList.length -1].id +1,
        text: text,
        author: author,
      })
    )
  };
  
  const b = ()=> {
    console.log(typeof(messageList));
    console.log(messageList)
  };

  const a = (author) => {
    alert(author + ', сообщение отправлено!');
  };
  
  const text = useRef();
  const author = useRef();

  const Send = () => {
    Update(text.current.value,author.current.value);  
    a(author.current.value);
  };


  return (
    <div className='root'>
    <div className='listMessage'>
      <div>
        <input ref={text} type="text" className='text' />
        <div className='authorSend'>
          <input ref={author} type="text" className='author'/>
          <button onClick={b}>Send</button>
        </div>
      </div>
    {messageList.map(item => {
      return(
        <Message item={item} key={item.id}/>
      )
    })}
    </div>
    </div>
  );
}

export default App;