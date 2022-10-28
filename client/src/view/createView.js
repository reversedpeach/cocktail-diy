import React from "react";
import CreateElemListView from "../view/createElemListView.js";
import CreateTitleView from "../view/createTitleView.js";
import CreateInstrucView from "../view/createInstrucView.js";
import CreateSaveView from "../view/createSaveView.js";
import CreateNameView from "../view/createNameView.js";
import styled from "styled-components";

import Select from "react-select";

const StyledTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-content: center;
font-size: 16pt;
font-family: Helvetica;
color: white;
padding-bottom: 10px;
flex-direction: column;
align-self: flex-start;

`;
const StyledForm = styled.div`
            border: '3px solid white',
            borderRadius: '12px',
            width: '20px'
font-family: 'Helvetica'`;


export default function CreateView(props) {

    const customStyles = {
        option: (styles, state) => ({
            ...styles,
            cursor: 'pointer',
            width: '200px',
            fontSize: "10pt",
            color: "rgb(127,127,127)"
        }),
        control: (styles) => ({
            ...styles,
            cursor: 'pointer',
            border: '3px solid rgb(127,127,127)',
            borderRadius: '12px',
            width: '200px',
            fontSize: "10pt",
            color: "rgb(127,127,127)"
        })
    };

    function setGlass(choice) {
        props.setGlass(choice.value);
    }

    function setType(choice) {
        props.setType(choice.value);
    }

    return (<React.Fragment>
        <CreateTitleView />,
        <CreateNameView setName={props.setName} />
        <div className="rowBox">
            <div className="resultCol">
                <StyledTitle>Ingredients</StyledTitle>
                {props.ingredients.map((ing, index) => (
                    <CreateElemListView key={index} ingredient={ing} id={"measurement" + (index + 1)} />
                ))}
            </div>,
            <CreateInstrucView />
            <div className="resultCol">
                <StyledTitle>Select Glass and Type</StyledTitle>
                <Select options={props.glassList}
                    styles={customStyles}
                    placeholder="Select glass"
                    onChange={setGlass}>
                </Select>
                <Select options={props.typeList}
                    styles={customStyles}
                    placeholder="Select type"
                    onChange={setType}></Select>
                <br></br>
                <StyledTitle>Upload an image</StyledTitle>
                <CreateSaveView startCreate={props.saveDrink}
                    success={props.success}
                    loading={props.loading}
                    status={props.status} />
            </div>
        </div>
    </React.Fragment>);
}