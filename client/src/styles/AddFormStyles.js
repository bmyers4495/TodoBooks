import Styled from 'styled-components';

const FormDiv = Styled.div`
    display:block;
    z-index:2;
    background-color:grey;
    position:relative;
`;

const AddType = Styled.input.attrs((props) => ({
    placeholder: "Type of todolist"
}))`
    display:block;
    width: 90%;
    margin: auto;
    
`;

const AddDesc = Styled.textarea.attrs((props) => ({
    placeholder: "Description of this todolist"
}))`
    resize: none;
    display:block;
    width: 90%;
    margin: auto;
`;

const AddName = Styled.input.attrs((props) => ({
    placeholder: "Name of todolist"
}))`
    display:block;
    width: 90%;
    margin: auto;
    z-index:2;
`;

const AddDiv = Styled.div`
    display:block;
`;

const AddFormButton = Styled.button`

    display:inline-block;
    margin-left: 10px;
    border-radius:50%;
    border: none;
    background-color: blue;


`;

const AddForm = Styled.form.attrs((props) =>({
    id:'AddForm'
}))`
    width: 100%;
    display:block;
    z-index:2;

`;

const AddLabel = Styled.label`
    font-size: 15px;
    display:inline-block;
    margin-left:5%;
    @media (max-width:720px) {
        font-size:10px;
    }
`;

export { AddDesc, FormDiv, AddType, AddName, AddFormButton, AddDiv, AddLabel, AddForm }