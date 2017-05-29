import React from 'react'

function CounterView(props) {
    const onCount = () => props.count()
    return (
        <div>
            <h1>Hello World</h1>
            <span>Counter Tick: {props.counter} </span>
            <button onClick={onCount}>Count</button>
        </div>
    )
}

export default CounterView;
