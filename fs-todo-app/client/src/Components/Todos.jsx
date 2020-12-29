import React from 'react'
import Todo from "./Todo"
import {Consumer} from './Context'
function Todos (){
        return (
            <Consumer> {(value)=>{
                const {todos} = value
                return ( todos.map(todo=><Todo  todo = {todo} id={todo.id}/>))
            }}
            </Consumer>
        )
}

export default Todos;