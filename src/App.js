import React from "react";
import Bolean from "./component/photos/Bolean";
import Counter from "./component/photos/Counter";
import DidMount from "./component/photos/DidMount";
import Rfc from "./component/photos/Rfc";
import Rfcphoto from "./component/photos/Rfcphoto";

class Sample extends React.Component {
  state={
    nm:'Elyes',
    ln:'TRABELSI',
    Bio:'Im ELYES TRABELSI',
    Pro:'IT MANAGER',
    x:0,
    show: false,
    image:'https://as1.ftcdn.net/v2/jpg/02/20/31/34/1000_F_220313437_zqw0jIcstXIT4WUVB3NXqCGc4Z4FUJoK.jpg'  
  }
  increment=()=>{
    this.setState({x: this.state.x + 1})
}
  decrement=()=>{
  this.setState({x: this.state.x - 1})
}
componentDidMount(){
  setTimeout( () => {
    alert('Site SACEM')
  }, 3000)
}

  render() {
    return (

      <div>
    {this.state.nm}<br/>
    {this.state.ln}<br/>
    {this.state.Bio}<br/>
    {this.state.Pro}<br/>
    <p>{this.state.x}</p>
    <button onClick={() => this.increment()}>increment</button>
    <button onClick={() => this.decrement()}>decrement</button>
    <button onClick={() => this.setState({x:this.state.x+1}) }>incremennnt +1 </button>
      
    <Bolean />
    <Rfc />
    <Rfcphoto />
    <DidMount />

  

      </div>
    )

    
  }
}
 
class App extends React.Component {
  render() {
    return <Sample />;

  }
}



export default App;

