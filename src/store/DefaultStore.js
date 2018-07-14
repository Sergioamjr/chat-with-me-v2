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
      text: 'Olá, tudo bem?',
      id: '1234',
      date: new Date(),
      sendByMe: false,
    }
  ],
  currentChat: {
    id: '1234', name: 'Mãe Cersei'
  }
}

export default DefaultStore