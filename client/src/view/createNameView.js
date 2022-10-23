import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import styled from 'styled-components';

const StyledCenter = styled.div`
flex-direction: column;
align-self: center;
display: flex;

`

export default function CreateNameView(props) {
    function setName(event) {
        props.setName(event.target.value);
    }

    return (<StyledCenter>
        <input type="text" placeholder="Name of your drink" onChange={setName} />
    </StyledCenter>)
};