/* @flow */

import CounterDispatcher from './CounterDispatcher'
import CounterActionTypes from './CounterActionTypes'

const Actions = {
  count(counter){
    CounterDispatcher.dispatch({
      type: CounterActionTypes.COUNT
    })
  }
}

export default Actions;
