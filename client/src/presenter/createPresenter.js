import React, { useState } from "react";
import CreateElemListView from "../view/createElemListView.js";
import CreateTitleView from "../view/createTitleView.js";
import CreateInstrucView from "../view/createInstrucView.js";
import CreateSaveView from "../view/createSaveView.js";
import CreateTypeGlassView from "../view/createTypeGlassView.js";
import CreateNameView from "../view/createNameView.js";
import useModelProp from "../utils/useModelProp.js";
import { usePromise } from "../utils/usePromise.js";
import styled from "styled-components";
import CocktailSource from "../cocktailApi.js";
import getFormData from "../utils/getFormData.js";
import { gql, useMutation } from "@apollo/client";


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

/*const CREATE_DRINK_MUTATION = gql`
    mutation createDrink(
        $name: String!
        $ingredients: [{name:String, measurement:String}]!
        $glasstype: String
        $instructions: String!
        $img: String
    ){
        createDrink(
            name: $name
            ingredients: $ingredients
            glasstype: $glasstype
            instructions: $instructions
            img: $img
        ){
            name
            id
        }
    }
`;*/

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

function CreatePresenter({ model }) {
    const ingredients = useModelProp(model, "currentdrink");
    const newdrink = useModelProp(model, "createddrink");

    const [promiseGlass, setPromiseGlass] = React.useState(null);
    React.useEffect(() => setPromiseGlass(CocktailSource.getAllGlasses()), []);
    const [glass, err1] = usePromise(promiseGlass);
    const glasses = [];

    const [promiseType, setPromiseType] = React.useState(null);
    React.useEffect(() => setPromiseType(CocktailSource.getAllTypes()), []);
    const [type, err2] = usePromise(promiseType);
    const [success, setSuccess] = useState(false);
    const [createDrink, { data, loading, error }] = useMutation(CREATE_DRINK_MUTATION, { onCompleted: (data) => { console.log(data); setSuccess(true) } });

    const types = [];

    if (glass !== null) {
        for (let i = 0; i < glass.length; i++) {
            if (glass["strGlass"] !== null) {
                glasses.push(glass[i]["strGlass"]);
            }
        }
    }

    if (type !== null) {
        for (let i = 0; i < type.length; i++) {
            if (type["strAlcoholic"] !== null) {
                types.push(type[i]["strAlcoholic"]);
            }
        }
    }

    function saveData() {
        for (let i = 0; i < ingredients.length; i++) {
            const measurement = getFormData("measurement" + (i + 1));
            model.addIngredientsDrink(ingredients[i], measurement);
        }
        model.addInstructionsDrink(getFormData("instructions"));
        model.addGlassDrink(getFormData("glasslist"));
        model.addTypeDrink(getFormData("typelist"));
        model.addImgDrink(getFormData("uploadimg"));

        //need to empty object afterwards
        console.log(newdrink);
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
        console.log("Setting name to: ", name);
        model.addNameDrink(name);
    }

    return (<React.Fragment><CreateTitleView />,
        <CreateNameView setName={setName} />
        <div className="rowBox">
            <div className="resultCol">
                <StyledTitle>Ingredients</StyledTitle>,
                {ingredients.map((ing, index) => (
                    <CreateElemListView ingredient={ing} id={"measurement" + (index + 1)} />
                ))}
            </div>,

            <CreateInstrucView />,
            <div className="resultCol">,
                <select id="glasslist">{glasses.map((glass) => (
                    <CreateTypeGlassView element={glass} />
                ))}</select>
                <select id="typelist">{types.map((type) => (
                    <CreateTypeGlassView element={type} />
                ))}</select>,
                <StyledTitle>Upload an image</StyledTitle>
                <CreateSaveView startCreate={saveData} />
            </div>
        </div>
    </React.Fragment>
    )
};

export default CreatePresenter;