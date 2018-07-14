const DefaultStore = {
  user: {
    name: 'Sérgio Junior'
  },
  friends: [
    {id: '1234', name: 'Mãe Cersei'},
    {id: '4534', name: 'Jofrey'},
    {id: '6464', name: 'Jaime'},
  ],
  messages: [
    {
      message: 'Olá, tudo bem?',
      with: '312313121',
      date: new Date(),
      sendByMe: false,
    }
  ],
  currentChat: {
    id: '1234', name: 'Mãe Cersei'
  }
}

export default DefaultStore