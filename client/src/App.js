import React, { Component } from 'react'
import { SideBar, GlobalStyle } from './styles/SideBarStyles'
import { TodoAdd } from './components/TodoAdd';
import { Notes } from './components/Notes';


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

export default App

