import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'
import store from './redux/store';

const App = () => <div>
    <p><b>Redux 计数器</b></p>
    <Counter store={store} />
</div>;

const render = () => ReactDOM.render(<App/>, document.getElementById('root2'));
render()
store.subscribe(render)