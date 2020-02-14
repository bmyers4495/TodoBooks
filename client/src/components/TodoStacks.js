import React, { Component } from 'react';
import { ContentDiv, Content } from '../styles/SideBarStyles';
import {ContextMenu} from './ContextMenu';

export class TodoStacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            contextMenu: false,
        }
        this.createBook = this.createBook.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    createBook(item) {
        return (
            <Content
             key={item.key} className="content">
                <h2>{item.text[0]}</h2>
                <i>type:{item.text[1]}</i>
            </Content>
        )
    }
    render() {
        var items = this.props.entries;
        var listedItems = items.map(this.createBook)
        

        return (
            <React.Fragment>
                <ContentDiv>
                    <div className={"todoBook"} onClick={() => this.props.toggleNotes(items.key)}>
                        {listedItems}
                    </div>
                </ContentDiv>
            </React.Fragment>
        )
    }
}

export default TodoStacks
