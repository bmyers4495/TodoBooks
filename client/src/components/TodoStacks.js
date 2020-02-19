import React, { Component } from 'react'
import { ContextMenu } from './ContextMenu'
import Styled from 'styled-components'

export class TodoStacks extends Component {
  renderBook = item => {
    return (
      <Content key={item.key} className="content">
        <h2>{item.text.name}</h2>
        <i>type:{item.text.type}</i>
        <ContextMenu node={this.node} />
      </Content>
    )
  }
  render() {
    var items = this.props.entries
    var listedItems = items.map(this.renderBook)

    return (
      <React.Fragment>
        <ContentDiv>
          <div
            className={'todoBook'}
            onClick={() => this.props.toggleNotes(items.key)}
            ref={node => (this.node = node)}
          >
            {listedItems}
          </div>
        </ContentDiv>
      </React.Fragment>
    )
  }
}

const ContentDiv = Styled.ul`
	background-color:white;
	width: 90%;
	overflow-x: scroll;
	position: relative;
	height:100%;
	padding-left: 0;
	z-index: 1;
	margin: 10px;
    
    &::-webkit-scrollbar {
        display: block;
        width: .3em;
        overflow: auto;
        height: 0;
    }
 
    &::-webkit-scrollbar-track {
        width: 0px;
        height: 0px;
        background-color: #aaa; /* or add it to the track */
    }
 
    &::-webkit-scrollbar-thumb {
        background: #000; 
    }
    h2{
        margin-top:10px;
        margin-bottom:10px;
    }
    i{

        width:100%;
    }
`

const Content = Styled.li`
    list-style: none;
    display:block;
	border-bottom:1px solid grey;
	h2{
		margin-top:0
	}
`

export default TodoStacks
