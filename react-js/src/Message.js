


function Message(props) {
  return (
      <div className='message'>
        <p className='textMessage'>{props.text}</p>
        <p className='authorMessage'>{props.author}</p>
      </div>
  );
}

export default Message;
