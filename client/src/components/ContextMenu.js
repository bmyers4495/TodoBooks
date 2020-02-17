import React, { Component } from 'react'
import { MenuDiv, MenuList, MenuItem } from '../styles/ContextMenuStyle'

export class ContextMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contextMenu: false,
            x: 0,
            y: 0,
        }


    }
    componentDidMount() {
        document.addEventListener('contextmenu', e => {

            var clickx = e.clientX;
            var clicky = e.clientY
            var target = e.target;
            var parent = e.target.parentNode;
            var content = document.getElementsByClassName("content");
            
                e.preventDefault()
                this.setState((prevState) => ({
                    contextMenu: !prevState.contextMenu,
                    x: clickx,
                    y: clicky,
                }))
        })

    }
    componentDidUpdate() {
        const menu = document.getElementById('menuDiv');
        console.log(this.state.contextMenu)
        if (this.state.contextMenu) {
            menu.style.left = this.state.x + 'px'
            menu.style.top = this.state.y + 'px'
            menu.style.display = "inline-block";
        } else {
            menu.style.display = "none";
        }
    }

    render() {
        return (
            <MenuDiv>
                <MenuList>
                    <MenuItem>Add</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Expand</MenuItem>
                </MenuList>
            </MenuDiv>
        )
    }
}

export default ContextMenu
