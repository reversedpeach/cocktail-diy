
import React from "react";
import styled from "styled-components";

const StyledElem = styled.input`
    position:relative;
    display: flex;
	width: 80px;
	filter: contrast(0%);
	opacity: 0.9;
	border: #494949;
    z-index: 0;
    &:hover{
        cursor:default
    }
`;

const StyledRemove = styled.div`
    width: 16px;
    height: 16px;
    margin-left:20px;
    margin-top:-5px;
    z-index: 100;
    border-radius: 100%;
    border: solid; 
    box-shadow: 1px 1px 6px #888888;
    position: absolute;
    color:rgb(127,127,127);
    background-color: white;
    text-align: center;
    &:hover{
        cursor:pointer;
    }
`;

const StyledIngTitle = styled.span`
	font-size: 10pt;
	font-family: Helvetica;
	color: #7F7F7F;
	padding-bottom: 12px;
	width: 10px;
    align-items: center;
    align-text:center;
    display:flex;
    align-self:center;
    justify-content:center;
`;



const MyBarProfileElemView = ({ barIng, onRemove }) => {

    function remove() {
        onRemove(barIng);
    }
    return <div className="barCol">
        <StyledRemove onClick={remove}>X</StyledRemove>
        <StyledElem type="image" src={"https://www.thecocktaildb.com/images/ingredients/" + barIng + "-Small.png"} />
        <StyledIngTitle>{barIng}</StyledIngTitle>
    </div>


};

export default MyBarProfileElemView;