import { createStore, applyMiddleware } from 'redux'
import DefaultStore from './DefaultStore'
import Reducers from './../reducers'
import { appendName} from './../middlewares'

const Store = createStore(Reducers, DefaultStore, applyMiddleware(appendName))

export default Store
