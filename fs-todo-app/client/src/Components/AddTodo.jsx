import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form>
                <input type="text" className='form-control'/>
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}
