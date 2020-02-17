import Styled from 'styled-components';

const MenuDiv = Styled.div.attrs({
    id:"menuDiv"
})`
    position:absolute;
    background:grey;
    z-index: 5;
    visibility: 0;
    height:auto;
    width:auto;
    text-align:center;
    display:none;
`;

const MenuList = Styled.ul`
    list-style:none;
    margin:0;
    padding:0;


`;
const MenuItem = Styled.li`
    border-bottom:1px solid black;
    &:hover{
        cursor:pointer;
        background-color:blue;
    }
`;

export{MenuDiv, MenuItem, MenuList}
