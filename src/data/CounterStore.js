import ReduceStore from 'flux/lib/FluxReduceStore';
import CounterDispatcher from './CounterDispatcher'
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
