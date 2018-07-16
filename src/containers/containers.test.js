import React from 'react'
import { ChatInput } from './'
import { shallow, mount } from 'enzyme'

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import DefaultStore from './../store/DefaultStore'
const mockStore = configureStore();
const store = mockStore({...DefaultStore});

describe('containers', () => {
  it('should return true', () => {
    expect(true).toBeTruthy()
  })
  describe('<ChatInput />', () => {
    it('should render without crash', () => {
      shallow(
        <Provider store={store}>
          <ChatInput />
        </Provider>
      )
    })
  })
})