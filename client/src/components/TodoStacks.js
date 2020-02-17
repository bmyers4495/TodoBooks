import React, { Component } from 'react';
import { ContentDiv, Content } from '../styles/SideBarStyles';
import { MenuDiv, MenuList, MenuItem } from '../styles/ContextMenuStyle'

export class TodoStacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            contextMenu: false,
        }
        this.createBook = this.createBook.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleContext = this._handleContext.bind(this);
        this.showContext = this.showContext.bind(this);
    }
    componentDidMount() {
        window.addEventListener('contextmenu', this._handleContext)
        window.addEventListener('click', this._handleClick)
    }
    componentWillUnmount(){
        window.removeEventListener("contextmenu", this._handleContext)
        window.removeEventListener("click", this._handleClick)

    }
    showContext = e => {
        const cMenu = document.getElementById("menuDiv");
        if (this.state.contextMenu) {
            e.preventDefault();
            cMenu.style.display = "inline-block";
        }
    }
    _handleClick(){
        this.setState({contextMenu: false,})
        const cMenu = document.getElementById("menuDiv");
        if (cMenu !== null){
        cMenu.style.display = "none";}
    }
    _handleContext(){

            this.setState(prevState => ({
                contextMenu: !prevState.contextMenu,
            }))
    }
    createBook(item) {
        return (
            <Content
                key={item.key} className="content" >
                <h2>{item.text.name}</h2>
                <i>type:{item.text.type}</i>
                <MenuDiv>
                    <MenuList>
                        <MenuItem>Add</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Expand</MenuItem>
                    </MenuList>
                </MenuDiv>
            </Content>
        )
    }
    render() {
        var items = this.props.entries;
        var listedItems = items.map(this.createBook)


        return (
            <React.Fragment>
                <ContentDiv >
                    <div className={"todoBook"} onClick={() => this.props.toggleNotes(items.key)} onContextMenu={this.showContext}>
                        {listedItems}
                    </div>
                </ContentDiv>
            </React.Fragment>
        )
    }
}

export default TodoStacks
