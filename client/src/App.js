import React, { Component } from 'react'
import { TodoAdd } from './components/TodoAdd'
import { Notes } from './components/Notes'
import Styled, { createGlobalStyle } from 'styled-components'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showBooks: false }
    this.toggleNotes = this.toggleNotes.bind(this)
  }
  toggleNotes = key => {
    this.setState(prevState => ({
      showNotes: !prevState.showNotes
    }))
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <SideBar>
          <TodoAdd toggleNotes={this.toggleNotes} />
        </SideBar>
	<TodoListDiv>
	<Notes showNotes={this.state.showNotes} />
	    </TodoListDiv>
      </React.Fragment>
    )
  }
}

const SideBar = Styled.div`
    background: linear-gradient(#aaa, #8f8fa5);
	flex:1;
	height:100%;
	display:flex;
	flex-direction:column;
`

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        width: 100%;
    }
    body{
        height: 100%;
        width: 100%;
        margin:0;
    }
    #root{
        overflow-x:show;
        height:100%;
        width:100%;
	display:flex;
	flex-direction: row;
    }
`

const TodoListDiv = Styled.div`
	height:100%;
	flex:5;
`

export default App
