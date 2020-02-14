import Styled, { createGlobalStyle } from 'styled-components';

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

const ContentDiv = Styled.ul`
    display:block;
    background-color: white;
    width:90%;
    margin:auto;
    top:20px;
    height:90%;
    overflow-x:scroll;
    position:absolute;
    padding-left:0;
    z-index:1;
    
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
`;

const Content = Styled.li`
    list-style: none;
    display:block;
    border-bottom:1px solid grey;
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
export { SideBar, ContentDiv, GlobalStyle, Content }