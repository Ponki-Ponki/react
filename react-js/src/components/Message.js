function Message(props) {
  return (
      <div className='message'>
        <div className="textMessage">
          <p>Сообщение:  </p>
          <p> {props.item.text}</p>
        </div>
        <p className='authorMessage'>Автор: {props.item.author}</p>
      </div>
  );
}

export default Message;
