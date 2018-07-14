import { createStore, applyMiddleware } from 'redux'
import DefaultStore from './DefaultStore'
import Reducers from './../reducers'
import { appendName, appendMessageDetails } from './../middlewares'

const Store = createStore(Reducers, DefaultStore, applyMiddleware(appendName, appendMessageDetails))

export default Store
