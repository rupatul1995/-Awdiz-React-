import  styled from "styled-components"; 

const MyAnotherFontElement = styled.p` 
font-size:22px;
font-weight:600;
color:red;
`;



function StyleComponent(){
    return (
    <div>
        <h1>StyleComponent</h1>
        <p>StyleComponent</p>
        <MyAnotherFontElement><h1>Style-Component</h1></MyAnotherFontElement>
        </div>
    );
}
export default StyleComponent;