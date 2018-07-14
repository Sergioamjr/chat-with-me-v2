const DefaultStore = {
  user: {
    name: 'Joffrey Lannister'
  },
  friends: [
    {id: '1234', name: 'Mãe Cersei'},
    {id: '4534', name: 'Tio Tyrion'},
    {id: '6464', name: 'Tio Jaime'},
  ],
  messages: [
    {
      text: 'Olá, tudo bem?',
      id: '1234',
      name: 'Mãe Cersei',
      date: new Date(),
      sendByMe: false,
    }
  ],
  currentChat: {
    id: '1234', name: 'Mãe Cersei'
  }
}

export default DefaultStore