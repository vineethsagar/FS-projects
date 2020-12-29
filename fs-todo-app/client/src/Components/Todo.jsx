import React, { Component } from 'react'

export default function Todo() {
        const {title} = this.props.title
        return (
            <div>
                <button>Delete</button>   
                    <i>{title}</i>
                <input type="checkbox" name="checkbox" id="checkbox"/>
            </div>
        )
}
