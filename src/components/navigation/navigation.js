import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

export default class NavigationContainer extends Component {
    constructor () {
        super();

    }
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
                <NavLink exact to="/blog">Blog</NavLink>
            </div>
        )
    }
}