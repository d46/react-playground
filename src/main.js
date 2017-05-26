import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return (
            <h1>Hello World, {this.props.name}</h1>
        );
    }
}

ReactDOM.render(<App name="Perez" />, document.getElementById('root'));
