const DefaultStore = {
  user: {
    name: 'Sérgio Junior'
  },
  friends: [
    {id: '31241323', name: 'Mãe Cersei'},
    {id: '31241323', name: 'Jofrey'},
    {id: '31241323', name: 'Jaime'},
  ],
  messages: [
    {
      message: 'Olá, tudo bem?',
      with: '312313121',
      date: new Date(),
      sendByMe: false,
    }
  ],
}

export default DefaultStore