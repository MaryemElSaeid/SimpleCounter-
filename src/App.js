import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
 render(){
    return (
      <div><Counter initCount={3}/></div>

    );
 }
}


class Counter extends React.Component {
  constructor(props){
    super();
    this.state={
      count:props.initCount
    }
  }

  changeCount=(op)=>{
    if(op=="+"){
      this.setState({count:this.state.count+1});
    } else if (op=="-") {
      this.setState({count:this.state.count-1});
    }
  }
  
  render(){
    return (
      <div>
        <div>{this.state.count}</div>
        <button className="btn btn-success" onClick={()=>this.changeCount("+")}>Increase</button>
        <button onClick={()=>this.changeCount("-")}>Decrease</button>
      </div>
    )
  }
}



export default App;

