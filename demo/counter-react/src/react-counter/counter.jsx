import React from 'react'

class Counter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        const number = this.select.value * 1
        this.setState({
            count: this.state.count + number
        });
    }

    decrement = () => {
        const number = this.select.value * 1
        this.setState({
            count: this.state.count - number
        });
    }

    incrementIfOdd = () => {
        const count = this.state.count
        if (count % 2 === 1) {
            this.increment()
        }
    }

    incrementAsync = () => {
        // 延时 1s 后计数
        setTimeout(() => {
            this.increment();
        }, 1000);
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
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

export default Counter