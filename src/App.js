import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {


  constructor(props){
    super(props);

    this.state={
      count: 0,
      status:true
    }
    console.log("constructor in App")
  }
 
  componentDidMount(){
    console.log("componentDidMount in App")
  }


  shouldComponentUpdate(nextProps,nextState){
    console.log("ShouldComponentUpdate in App")
    return true
  }

  componentDidUpdate(prevProps,preState){
    console.log("updated in App")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount in App")
  }
  render() {
    console.log("render in App")
    return (
      <div>
        <h1>Lifecycles in React</h1>
        {this.state.status?<Child count={this.state.count}/>: null } 
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
        <button onClick={()=>this.setState({status:!this.state.status})}>Mount and unMount Child</button>
      </div>
    )
  }
}
