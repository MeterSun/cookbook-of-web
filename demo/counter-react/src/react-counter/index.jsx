import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter.jsx";

class App extends React.Component {
    render() {
        return <div>
            <p>
                <b>React 计数器</b>
            </p>
            <Counter />
        </div>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
