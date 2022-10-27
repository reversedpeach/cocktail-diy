import React from "react";
import styled from "styled-components";


const StyledMessage = styled.div`

font-size: 14pt;
font-family: Helvetica;
width: 120px;
height: 30px;
padding-top: 10px;
color: white;
border: solid;
border-color: cornflowerblue;
background-color: cornflowerblue;
border-radius: 20px;
text-align: center;

`;


const LoadingStatusView = ({ }) => {

    return (<StyledMessage> Loading... </StyledMessage>)

};

export default LoadingStatusView;