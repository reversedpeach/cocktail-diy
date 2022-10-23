import React from "react";
import "../utils/css/drinkResults.css";
import styled from "styled-components";

const StyledDetails = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  transition: 200ms ease-in-out;
  border-radius: 20px;
  background: white;
  top: 50%;
  left: 50%;
  width: 600px;
  max-width: 80%;
  padding-left: 40px;
  padding-bottom: 40px;
  opacity:1 !important;
  box-shadow: 2px 2px 6px #888888;
  z-index:1;
`


const StyledTitle = styled.div`
padding-top: 10px;	
display: flex;
align-self: flex-start;
font-size: 28pt;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
margin: 0px;
font-weight: bold;
`

const StyledRow = styled.div`
	padding-top: 20px;
	display: flex;
	flex-direction: row;
	align-content: flex-start;
	justify-content: space-between;
	gap: 20px;
	align-items: flex-start;

`

const StyledCol = styled.div`
	
	display: flex;
	flex-direction: column;
	align-content: flex-end;
	justify-content: flex-start;
	align-items: flex-start;
`

const StyledHeading = styled.div`
display: flex;
font-size: 16pt;
font-family: Helvetica;
color: #7F7F7F;;

`

const StyledHeadingSmall = styled.div`
margin-top: 0px;
display: flex;
font-size: 14pt;
font-family: Helvetica;
color: #7F7F7F;;
font-weight: bold;

`

const StyledTable = styled.table`
display: flex;
font-size: 12pt;
flex-direction: column;
align-items: flex-start;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
width: 200px;
margin-top: 10px;

align-content: stretch;

`
const StyledInstructions = styled.div`
display: flex;
font-size: 12pt;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
margin-top: 5px;
width: 200px

`

const StyledBtn = styled.button`
margin-right: 30px;
	display:flex;
	align-self: center;
	width: 50px
	height: 50px;
	border-radius: 5px;
	border: solid;
	border-color: rgb(125, 125, 125);;
	background-color: rgb(125, 125, 125);;
	color: white;
	cursor: pointer;
	
`

const ResultDetailsView = ({ title, ingredients, instructions, image, glass, alcoholic, endDetails }) => {
	return (
		<StyledDetails>
			<StyledRow>
				<StyledTitle>{title.toUpperCase()}</StyledTitle>
				<StyledBtn onClick={endDetails}>X</StyledBtn>
			</StyledRow>
			<StyledCol>

				<StyledRow><img className="img" src={image}></img>
					<StyledCol>
						<StyledHeadingSmall>Glass</StyledHeadingSmall>
						<StyledInstructions>{glass}</StyledInstructions>
						<br></br>
						<StyledHeadingSmall>Type</StyledHeadingSmall>
						<StyledInstructions>{alcoholic}</StyledInstructions>
					</StyledCol>
				</StyledRow>
				<StyledRow>
					<StyledCol>
						<StyledHeading>Ingredients </StyledHeading>

						<StyledTable>
							{ingredients.map(obj =>
								<tr>
									<td>{obj.ingredient} </td>
									<td> : {obj.amount}</td>
								</tr>
							)}</StyledTable>
					</StyledCol>
					<StyledCol>
						<StyledHeading>Instructions</StyledHeading> <StyledInstructions>{instructions}</StyledInstructions>
					</StyledCol>
				</StyledRow>
			</StyledCol>
		</StyledDetails>)


};

export default ResultDetailsView;
