import CounterDispatcher from './CounterDispatcher'
import CounterActionTypes from './CounterActionTypes'

const Actions = {
    count(){
        CounterDispatcher.dispatch({
            type: CounterActionTypes.COUNT
        })
    }
};

export default Actions;
