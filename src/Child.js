import React, { Component } from 'react'

export default class Child extends Component {


  constructor(props){
    super(props);
    console.log("constructor in Child")
  }
 
  componentDidMount(){
    console.log("componentDidMount in Child")
  }

  shouldComponentUpdate(nextProps,nextState){
   if(nextProps.count<5){
       return true  
   }else{
       return false
   }
  
  }

  componentDidUpdate(prevProps,preState){

    console.log("updated in child")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount in Child")

  }
  render() {
    console.log("render in Child")
    return (
      <div>
        <h1>Child Component</h1>
    <h2>{this.props.count}</h2>
       
      </div>
    )
  }
}
