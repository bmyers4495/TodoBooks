import React, { Component } from 'react';
// import TodoStacks from './TodoStacks';
import Expand from 'react-expand-animated';
import {NotesDiv} from '../styles/NoteStyles'

export class Notes extends Component {
    componentDidUpdate(){
        console.log(this.props.showNotes)
    }

    render() {
        return (
            
            <React.Fragment>
                <NotesDiv>
                <Expand open={this.props.showNotes}>
                </Expand>
                </NotesDiv>
            </React.Fragment>
        )
    }
}

export default Notes
