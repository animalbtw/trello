import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import indexReducer from './reducers/indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(indexReducer, applyMiddleware(thunk))

export default store