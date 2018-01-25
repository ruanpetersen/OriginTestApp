import React, { Component } from 'react';
import './App.css';

const green = '#39D1B4';
const yellow = '#FFD712';

class App extends Component {

  state = {
    numChildren: 0
  }

  render () {

    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    };

    return (
      <ParentComponent addChild={this.onAddChild}>
        {children}
      </ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

const ParentComponent = props => (
  <div className="card calculator">
    <p><a href="#" onClick={props.addChild}><button id="name1">Name</button></a></p>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);

const ChildComponent = props => <div>{<button>Child</button>}</div>;

export default App;
