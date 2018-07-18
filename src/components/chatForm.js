import React from 'react'

const ChatForm = ({text = '', onSubmitHandler = () => {}, onChangeHandler = () => {}}) => (
  <form>
  <textarea onChange={onChangeHandler} value={text} placeholder='Digite sua mensagem' />
  <button type="submit" onClick={onSubmitHandler}>Enviar</button>
</form>
)

export default ChatForm
