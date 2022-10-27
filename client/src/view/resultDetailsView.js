import React from "react";
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



const StyledLikeBtn = styled.button`
	display:flex;
	width: fit-content;
	height: 24px;

	border-radius: 5px;
	
	background-color: cornflowerblue;
	color:  white;
	cursor: pointer;
	font-family:"Helvetica";
	margin-left: 2px;
	text-align:center;
	align-items: center;
	&:active{
		background-color: #1858cd;
		border-color:#1858cd;

	}
	
`

function ResultDetailsView(props) {
	function like() {
		props.like();
	}

	function unlike() {
		props.unlike();
	}


	return (
		<StyledDetails>
			<StyledRow>
				<StyledTitle>{props.title.toUpperCase()}</StyledTitle>
				<StyledBtn onClick={props.endDetails}>X</StyledBtn>
			</StyledRow>
			<StyledCol>
				<StyledRow><img className="drinkImg" src={props.image}></img>
					<StyledCol>
						<StyledHeadingSmall>Glass</StyledHeadingSmall>
						<StyledInstructions>{props.glass || ""}</StyledInstructions>
						<br></br>
						<StyledHeadingSmall>Type</StyledHeadingSmall>
						<StyledInstructions>{props.alcoholic || ""}</StyledInstructions>
						<br></br>
						<StyledLikeBtn onClick={props.liked ? unlike : like}> {props.liked ? "LIKED" : "LIKE"} </StyledLikeBtn>
					</StyledCol>
				</StyledRow>
				<StyledRow>
					<StyledCol>
						<StyledHeading>Ingredients </StyledHeading>
						<StyledTable>
							{props.ingredients.map((ingredient) =>
								<tr>
									<td>{ingredient.name} </td>
									<td> : {ingredient.measurement}</td>
								</tr>
							)}</StyledTable>
					</StyledCol>
					<StyledCol>
						<StyledHeading>Instructions</StyledHeading> <StyledInstructions>{props.instructions}</StyledInstructions>
					</StyledCol>
				</StyledRow>
			</StyledCol>
		</StyledDetails>)


};

export default ResultDetailsView;
