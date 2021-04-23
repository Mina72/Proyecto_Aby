import React, {Component} from 'react';

export class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { color: "teal", name: "John", lastname: "Doe" };
    }
  
    getFullname() {
      return `${this.state.name} ${this.state.lastname}`;
    }
  
    render() {
        return (
            <div style={{ background: this.state.color }}>
                <h3>{this.getFullname()}</h3>
            </div>
        )
    }
  }
  export default MyComponent;