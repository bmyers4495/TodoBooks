import React, { Component } from 'react'
import { TodoAdd } from './components/TodoAdd';
import { Notes } from './components/Notes';
import Styled, {createGlobalStyle} from 'styled-components'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showBooks: false }
    this.toggleNotes = this.toggleNotes.bind(this);
  }
  toggleNotes = (key) => {
    this.setState((prevState) => ({
      showNotes: !prevState.showNotes,
    }))

  }
  render() {

    return (
      <React.Fragment>
        <GlobalStyle />
        <SideBar>
          <TodoAdd toggleNotes={this.toggleNotes} />
        </SideBar>
        <Notes showNotes={this.state.showNotes} />
      </React.Fragment>
    )
  }
}

const SideBar = Styled.div`
    background: linear-gradient(#aaa, #8f8fa5);
    height:100%;
    left:0;
    bottom:0;
    width:150px;
    position:relative;
    margin-right:0;
    display:inline-block;
`;

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
    }
`;

export default App

