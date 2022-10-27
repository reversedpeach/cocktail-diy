import React, { useEffect, useState } from "react";
import CreateElemListView from "../view/createElemListView.js";
import CreateTitleView from "../view/createTitleView.js";
import CreateInstrucView from "../view/createInstrucView.js";
import CreateSaveView from "../view/createSaveView.js";
import CreateNameView from "../view/createNameView.js";
import useModelProp from "../utils/useModelProp.js";
import styled from "styled-components";
import getFormData from "../utils/getFormData.js";

import Select from "react-select";

import { gql, useMutation, useLazyQuery } from "@apollo/client";



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

const CREATE_DRINK_MUTATION = gql`
    mutation createDrink(
        $name: String!
        $ingredients: [Ingredientinput]!
        $instructions: String!
        $glassType: String
        $type: String
    ){
        createDrink(
            name: $name 
            ingredients: $ingredients 
            instructions: $instructions
            glassType: $glassType
            type:$type
        ) {
            name
            id
        }
    }
`;

const GET_GLASSES = gql`
query getGlasses {
  getAllGlasses
}
`;

const GET_TYPES = gql`
query getTypes {
  getAllTypes
}
`;

function Create({ model }) {
    const ingredients = useModelProp(model, "currentdrink");
    const newdrink = useModelProp(model, "createddrink");

    const [glassList, setGlassList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const glassTypes = [];
    const typeTypes = [];

    const [success, setSuccess] = useState(false);
    const [status, setStatus] = useState("");
    const [getGlasses, { glassData, glassLoading, glassError }] = useLazyQuery(GET_GLASSES, { onCompleted: (data) => { setGlasses(data.getAllGlasses) } });
    const [getTypes, { typeData, typeLoading, typeError }] = useLazyQuery(GET_TYPES, { onCompleted: (data) => { setTypes(data.getAllTypes) } });
    const [createDrink, { data, loading, error }] = useMutation(CREATE_DRINK_MUTATION, { onCompleted: (data) => { setSuccess(true) } });

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

    function setGlasses(glasses) {
        if (glasses !== null) {
            for (let i = 0; i < glasses.length; i++) {
                if (glasses[i] !== null) {
                    glassTypes.push({ value: glasses[i], label: glasses[i] });
                }
            }
        }
        setGlassList(glassTypes);
    }

    function setTypes(types) {
        if (types !== null) {
            for (let i = 0; i < types.length; i++) {
                if (types[i] !== null) {
                    typeTypes.push({ value: types[i], label: types[i] });
                }
            }
        }
        setTypeList(typeTypes);
    }

    useEffect(() => {
        getGlasses();
        getTypes();
    }, [])

    function saveDrink() {
        for (let i = 0; i < ingredients.length; i++) {
            const measurement = getFormData("measurement" + (i + 1));
            model.addIngredientsDrink(ingredients[i], measurement);
        }
        model.addInstructionsDrink(getFormData("instructions"));
        //model.addImgDrink(getFormData("uploadimg"));

        createDrink({
            variables: {
                name: newdrink.name,
                ingredients: newdrink.ingredients,
                instructions: newdrink.instructions,
                glassType: newdrink.glass,
                type: newdrink.type
            },
        });
        model.resetCreatedDrink();
    }

    function setName(name) {
        model.addNameDrink(name);

    }

    if (error) {
        setSuccess(false);
    }

    function resetStatus() {
        setStatus("")
        setSuccess(false);
    }

    useEffect(() => {
        if (!loading && data) {
            setStatus("Drink saved!")
            setSuccess(true);
            setTimeout(() => { resetStatus() }, 3000)
        }
        else if (error) {
            setStatus("Something went wrong, please try again")
            setSuccess(false);
            setTimeout(() => { resetStatus() }, 3000)
        }
    }, [data, loading, error])

    return (<React.Fragment>
        <CreateTitleView />,
        <CreateNameView setName={setName} />
        <div className="rowBox">
            <div className="resultCol">
                <StyledTitle>Ingredients</StyledTitle>
                {ingredients.map((ing, index) => (
                    <CreateElemListView ingredient={ing} id={"measurement" + (index + 1)} />
                ))}
            </div>,
            <CreateInstrucView />
            <div className="resultCol">
                <StyledTitle>Select Glass and Type</StyledTitle>
                <Select options={glassList}
                    styles={customStyles}
                    placeholder="Select glass"
                    onChange={(choice) => model.addGlassDrink(choice.value)}>
                </Select>
                <Select options={typeList}
                    styles={customStyles}
                    placeholder="Select type"
                    onChange={(choice) => model.addTypeDrink(choice.value)}></Select>
                <br></br>
                <StyledTitle>Upload an image</StyledTitle>
                <CreateSaveView startCreate={saveDrink} success={success} loading={loading} status={status} />
            </div>
        </div>
    </React.Fragment>
    )
};

export default Create;