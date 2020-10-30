import React from 'react';

class HelloReact extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          input1: "superstar"
        }
    }
    render(){
        return (
            <React.Fragment>
            <h2>Hello React Narongsak Takaew</h2>
            <h1>{this.state.input1}</h1>
            </React.Fragment>
        )
    }
}

export default HelloReact
