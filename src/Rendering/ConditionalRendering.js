import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor() {
    super()
    this.state= {
        isLogedIn : true
    }
    }
    render() {
        return (
            this.state.isLogedIn ?
        <div>hello </div> : 
        <div>hi</div>
        )
    }
}

export default ConditionalRendering;