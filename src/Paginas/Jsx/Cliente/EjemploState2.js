import React, {Component} from 'react';


export class MyHelloComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { myText: "hello" };
    }
  
    onChangeText() {        
      this.setState({ myText: "world" });
    }
  
    render() {
      return (
        <>
          <h3>{this.state.myText}</h3>
          <button onClick={this.onChangeText}>Change text</button>
        </>
      );
    }
  }


  export default MyHelloComponent;