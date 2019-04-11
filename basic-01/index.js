const Redux = require('redux')

console.log('demo redux in console')

function counter(state, action) {
    if (typeof state === 'undefined') 
        return 0

    switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      default: return state
    }
}

function render() {
    console.log(store.getState())
}

global.store = Redux.createStore(counter)
store.subscribe(render)

store.dispatch({ type: 'INCREMENT' })

// const node = document.getElementById('lol')
// console.log(node)