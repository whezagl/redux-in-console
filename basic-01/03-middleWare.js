import { 
    createStore, 
    combineReducers,
    applyMiddleware
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
    console.log(store03.getState())
}

function mw1(mwApi, next, action) {
    // console.log(arguments)
}
/**
 * 03-middleWare.js : store03
 */
console.log('03-middleWare.js : store03')
const reducer = combineReducers({ reducerCounter })

global.store03 = createStore(reducer, applyMiddleware(mw1))
// global.store03 = applyMiddleware(mw1).createStore(reducer)

store03.subscribe(handleUpdate)

store03.dispatch({ type: 'INCREMENT' })
 