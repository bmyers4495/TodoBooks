import React, { Component } from 'react'
import { FormDiv, AddType, AddDesc, AddName, AddFormButton, AddDiv, AddLabel, AddForm } from '../styles/AddFormStyles'
import { TodoStacks } from "./TodoStacks";
import Expand from 'react-expand-animated';

export class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            open: false,
        }
        this.addStack = this.addStack.bind(this);
    }
    expandForm = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    }
    addStack = e => {
        if (this._nameBox.value !== "") {
            var newItem = {
                text: {name: this._nameBox.value, type:this._typeBox.value, desc: this._descBox.value,},
                key: Date.now()
            }
        }
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
        })
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <AddDiv>
                    <AddLabel>Add Todo Books</AddLabel>
                    <AddFormButton onClick={this.expandForm}>+</AddFormButton>
                    <Expand open={this.state.open}>
                        <FormDiv>
                            <AddForm onSubmit={this.addStack}>
                                <AddName ref={(a) => this._nameBox = a} />
                                <AddType ref={(b) => this._typeBox = b} />
                                <AddDesc ref={(c) => this._descBox = c} />
                                <AddFormButton>Add</AddFormButton>
                            </AddForm>
                        </FormDiv>
                    </Expand>
                </AddDiv>
                <TodoStacks entries={this.state.items} toggleNotes={this.props.toggleNotes} />
            </React.Fragment>
        )
    }
}

export default TodoAdd
