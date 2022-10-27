import React from "react";
import styled from "styled-components";


const StyledMessage = styled.div`
display: flex;
align-self: center;
justify-content: center;
align-items: center;
font-size: 14pt;
font-family: Helvetica;
width: 100%;
padding-top: 10px;
color: white;
`;


const NoDrinkMessageView = ({ }) => {

    return (<StyledMessage>No results. Please try a new combination of ingredients! </StyledMessage>)

};

export default NoDrinkMessageView;