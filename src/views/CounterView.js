/* @flow */
import React from 'react'

function CounterView(props){
  return (
    <div>
        <h1>Hello World</h1>
        <span>Counter Tick: {props.counter} </span>
        <button onClick={props.count}>Count</button>
    </div>
  )
}

export default CounterView;
