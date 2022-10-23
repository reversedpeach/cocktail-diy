import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const StyledLink = styled(Link)`
text-decoration: none;
color: grey;
border-color:grey;
display: flex;
padding:2px;
border-radius:5px;
border:solid;
border-color: white;
&:hover, &:active{
    color: white;
    padding-left:10px;
    background-color:grey;
    padding:2px;
    border:solid;
    border-color:grey;
}
`;

const StyledNavWrapEnd = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding-right: 40px;
`;

const StyledNavWrapStart = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`;

const StyledNavBar = styled.nav`
text-decoration: none;
background-color:white;
padding-top: 10px;
padding-bottom: 10px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
font-family: "Helvetica", sans-serif;
text-decoration: none;
text-align: center;
margin-left: 55px;
`;
/**/

export default function NavBarView(props) {
    function logOut() {
        console.log("logging out");
        props.logOut();
    }

    if (props.isLoggedIn) {
        return (
            <StyledNavBar>
                <StyledNavWrapEnd>
                    <StyledLink to="/"> Home</StyledLink>
                    <StyledLink to="/profile"> Profile </StyledLink>
                    <StyledLink onClick={logOut}> Log out </StyledLink>
                </StyledNavWrapEnd>
            </StyledNavBar>
        )
    }

    return (
        <StyledNavBar>
            <StyledNavWrapEnd>
                <StyledLink to="/"> Home</StyledLink>
                <StyledLink to="/login"> Login</StyledLink>
                <StyledLink to="/register"> Register </StyledLink>
            </StyledNavWrapEnd>
        </StyledNavBar>
    )

}

