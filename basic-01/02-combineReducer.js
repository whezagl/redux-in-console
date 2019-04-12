import { 
    createStore, 
    combineReducers
} from 'redux'

function reducerCounter(state, action) {
    if (typeof state === 'undefined') 
        return 0

    switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      default: return state
    }
}

function handleUpdate() {
    console.log(store02.getState())
}
/**
 * 02-combineReducer.js : store02
 */
console.log('02-combineReducer.js : store02')
const reducer = combineReducers({ reducerCounter })
global.store02 = createStore(reducer)

store02.subscribe(handleUpdate)

store02.dispatch({ type: 'INCREMENT' })
 