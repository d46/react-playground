/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './containers/CounterContainer'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            multiplyVal: 0
        }
        this.doubleCount = this.doubleCount.bind(this)
        this.multiply = this.multiply.bind(this)
        this.multiplyValChangeHandler = this.multiplyValChangeHandler.bind(this)
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearTimeout(this.timerID)
    }

    tick() {
        this.setState((prevState, props) => ({
            count: ++prevState.count
        }))
    }

    doubleCount() {
        this.setState((prevState, props) => ({
            count: prevState.count * 2
        }))
    }

    multiply() {
        this.setState((prevState, props) => ({
            count: prevState.count * prevState.multiplyVal
        }));
    }

    multiplyValChangeHandler(event) {
        this.setState({multiplyVal: event.target.value});
    }

    render(doubleCount) {
        return (
            <div>
                <h1>Hello World, {this.props.name}</h1>
                <span>Counter Tick: {this.state.count} </span>
                <button onClick={this.doubleCount}>Double</button>
                <br/>
                <input type="text" value={this.state.multiplyVal} onChange={this.multiplyValChangeHandler}/>
                <button onClick={this.multiply}>Multiply with Value</button>
            </div>
        );
    }



}

ReactDOM.render(
    <CounterContainer />
    , document.getElementById('root'));
