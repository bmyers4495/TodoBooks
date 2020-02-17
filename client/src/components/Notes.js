import React, { Component } from 'react';
import Expand from 'react-expand-animated';
import Styled from 'styled-components';



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

const NotesDiv = Styled.div`
    height:100%;
    position:absolute;
    display:inline-block;
    margin:10px;
    top:50px;
`;

export default Notes
