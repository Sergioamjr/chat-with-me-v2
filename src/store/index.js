import { createStore, applyMiddleware } from 'redux'
import DefaultStore from './DefaultStore'
import Reducers from './../reducers'

const Store = createStore(Reducers, DefaultStore, applyMiddleware())

export default Store
