import React, { Component } from 'react';


const Context = React.createContext();

export default class Provider extends Component {

    state={
        todos:[{
            id:1,
            title:'todo1',
            complete:false
        },
    
        {
            id:2,
            title:'todo2',
            complete:false
        },
        {
            id:3,
            title:'todo3',
            complete:false
        },
        {
            id:4,
            title:'todo4',
            complete:false
        }
    ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;