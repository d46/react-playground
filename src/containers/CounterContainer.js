import CounterStore from '../data/CounterStore'
import FluxContainer from 'flux/lib/FluxContainer'
import CounterView from '../views/CounterView'
import CounterActions from '../data/CounterActions'

function getStores() {
  return [
      CounterStore,
  ]
}

function getState() {
  return {
    counter: CounterStore.getInitialState(),
    count: CounterActions.count
  }
}

export default FluxContainer.createFunctional(CounterView, getStores, getState)
