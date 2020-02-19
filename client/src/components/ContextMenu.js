import React, { Component } from 'react'
import Styled from 'styled-components'

export class ContextMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contextMenu: false,
      x: 0,
      y: 0
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleContext = e => {
    var clickx = e.clientX
    var clicky = e.clientY
    if (this.props.node.contains(e.target)) {
      e.preventDefault()
      this.setState(prevState => ({
        contextMenu: !prevState.contextMenu,
        x: clickx,
        y: clicky
      }))
    }
  }

  _handleClick = e => {
    this.setState({
      contextMenu: false,
      x: 0,
      y: 0
    })
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this._handleContext)
    document.addEventListener('click', this._handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this._handleContext)
    document.removeEventListener('click', this._handleClick)
  }

  componentDidUpdate() {
    const menu = document.getElementById('menuDiv')
    if (this.state.contextMenu) {
      menu.style.left = this.state.x + 'px'
      menu.style.top = this.state.y + 'px'
      menu.style.display = 'inline-block'
    } else {
      menu.style.display = 'none'
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

const MenuDiv = Styled.div.attrs({
  id: 'menuDiv'
})`
    position:absolute;
    background:grey;
    z-index: 10;
    visibility: 0;
    height:auto;
    width:auto;
    text-align:center;
    display:none;
`

const MenuList = Styled.ul`
    list-style:none;
    margin:0;
    padding:0;


`
const MenuItem = Styled.li`
    border-bottom:1px solid black;
    &:hover{
        cursor:pointer;
        background-color:blue;
    }
`

export default ContextMenu
