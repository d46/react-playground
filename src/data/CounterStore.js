/* @flow */

import {ReduceStore} from 'flux/utils';
import CounterDispatcher from './CounterDispatcher'
import {OrderedMap} from 'immutable'
import CounterActionTypes from './CounterActionTypes'

class CounterStore extends ReduceStore {
  constructor() {
    super(CounterDispatcher)
  }
  getInitialState(){
    return 0;
  }
  reduce(state, action){
    console.log(state, action);
    switch (action.type) {
      case CounterActionTypes.COUNT:
        return ++state
      default:
        return state
    }
  }
}

export default new CounterStore();
