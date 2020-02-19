import React, { Component } from 'react'
import { TodoStacks } from './TodoStacks'
import Expand from 'react-expand-animated'
import Styled from 'styled-components'

export class TodoAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      open: false
    }
    this.addStack = this.addStack.bind(this)
  }

  expandForm = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  addStack = e => {
    if (this._nameBox.value !== '') {
      var newItem = {
        text: {
          name: this._nameBox.value,
          type: this._typeBox.value,
          desc: this._descBox.value
        },
        key: Date.now()
      }
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
    }
    e.preventDefault()
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
                <AddName ref={el => (this._nameBox = el)} />
                <AddType ref={el => (this._typeBox = el)} />
                <AddDesc ref={el => (this._descBox = el)} />
                <AddFormButton>Add</AddFormButton>
              </AddForm>
            </FormDiv>
          </Expand>
        </AddDiv>
        <TodoStacks
          entries={this.state.items}
          toggleNotes={this.props.toggleNotes}
        />
      </React.Fragment>
    )
  }
}

const FormDiv = Styled.div`
    display:block;
    z-index:2;
    background-color:grey;
    position:relative;
`

const AddType = Styled.input.attrs(props => ({
  placeholder: 'Type of todolist'
}))`
    display:block;
    width: 90%;
    margin: auto;
    
`

const AddDesc = Styled.textarea.attrs(props => ({
  placeholder: 'Description of this todolist'
}))`
    resize: none;
    display:block;
    width: 90%;
    margin: auto;
`

const AddName = Styled.input.attrs(props => ({
  placeholder: 'Name of todolist'
}))`
    display:block;
    width: 90%;
    margin: auto;
    z-index:2;
`

const AddDiv = Styled.div`
    display:block;
`

const AddFormButton = Styled.button`

    display:inline-block;
    margin-left: 60px;
    border-radius:50%;
    border: none;
    background-color: blue;


`

const AddForm = Styled.form.attrs(props => ({
  id: 'AddForm'
}))`
    width: 100%;
    display:block;
    z-index:2;

`

const AddLabel = Styled.label`
    font-size: 15px;
    display:inline-block;
    margin-left:5%;
    @media (max-width:720px) {
        font-size:10px;
    }
`

export default TodoAdd
