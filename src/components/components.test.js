import React from 'react'
import { AppWrapper, ChatItem, ListOfFriendsItem } from './'
import { ListOfFriends } from './../containers'
import { shallow, mount } from 'enzyme'
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import DefaultStore from './../store/DefaultStore'
const mockStore = configureStore();
const store = mockStore({...DefaultStore});

describe('components', () => {
  describe('smoke tests', () => {
    it('should return true', () => {
      expect(true).toBeTruthy()
    }) 
  })

  describe('<ChatItem />', () => {
    it('should render <ChatItem /> without crash', () => {
      shallow(<ChatItem />)
    })

    it('should render list with text and name', () => {
      const objMock = {text: 'Olá, tudo bem?', name: 'John'}
      const wrapper = shallow(<ChatItem {...objMock} />)
      expect(wrapper.find('span').text()).toBe('De: John')
      expect(wrapper.find('p').text()).toBe('Olá, tudo bem?')
    })
  })

  describe('AppWrapper', () => {
    it('should render <AppWrapper /> without crash', () => {
      shallow(<AppWrapper/>)
    })

    it('should render children', () => {
      const wrapper = shallow(
        <Provider store={store}>
          <AppWrapper>
            <p>Children</p>
          </AppWrapper>
        </Provider>
      )
      expect(wrapper.find('p')).toHaveLength(1)
    })
  }) 

  describe('ListOfFriendsItem', () => {
    it('should render <ListOfFriendsItem /> without crash', () => {
      shallow(<ListOfFriendsItem />)
    })

    it('shoud render element with className blocked-link', () => {
      const objMock = { id: 1, name: 'Mike', currentID: 1}
      const wrapper = shallow(<ListOfFriendsItem {...objMock} />)
      expect(wrapper.getElement().props.className).toContain('blocked-link')
    })
  })
})