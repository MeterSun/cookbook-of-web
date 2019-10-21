import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/app"
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(<Provider store={store}>
    <p><b>React-Redux 计数器</b></p>
    <App />
</Provider>, document.getElementById('root3'));
