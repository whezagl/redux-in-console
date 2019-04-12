const {
    createStore
} = require('redux')

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
    console.log(store01.getState())
}
/**
 * 01-reducer.js : store01
 */
console.log('01-reducer.js : store01')
global.store01 = createStore(reducerCounter)

store01.subscribe(handleUpdate)

store01.dispatch({ type: 'INCREMENT' })
