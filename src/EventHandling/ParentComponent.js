import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parent: "parent"
        }
    }
    clickHandler = (className) => {
        alert(`i am ${this.state.parent} from ${className}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.clickHandler}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;