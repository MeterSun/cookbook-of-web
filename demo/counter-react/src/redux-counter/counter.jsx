import React from 'react'
import * as actions from './redux/actions'

export default class Counter extends React.Component {

    increment = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(actions.increment(number))
    }

    decrement = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(actions.decrement(number))
    }

    incrementIfOdd = () => {
        const number = this.select.value * 1
        const count = this.props.store.getState('count')
        if (count % 2 === 1) {
            this.props.store.dispatch(actions.increment(number))
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        }, 1000);
    }

    render() {
        const count = this.props.store.getState('count')
        return (
            <div>
                <p>{count}</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}
