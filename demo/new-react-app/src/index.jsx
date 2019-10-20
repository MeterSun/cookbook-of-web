import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return <p>hello react!</p>;
    }
}
ReactDOM.render(<Hello />, document.getElementById("root"));
