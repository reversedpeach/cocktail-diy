import React from "react";
import CreateElemListView from "../view/createElemListView.js";
import CreateTitleView from "../view/createTitleView.js";
import CreateInstrucView from "../view/createInstrucView.js";
import CreateSaveView from "../view/createSaveView.js";
import CreateTypeGlassView from "../view/createTypeGlassView.js";
import useModelProp from "../utils/useModelProp.js";
import { usePromise } from "../utils/usePromise.js";
import styled from "styled-components";
import CocktailSource from "../cocktailApi.js";
import getFormData from "../utils/getFormData.js";

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
            model.addIngredientsDrink(ingredients[i]);
            const measurement = getFormData("measurement" + (i + 1));
            model.addMeasurementsDrink(measurement);
        }
        model.addInstructionsDrink(getFormData("instructions"));
        model.addGlassDrink(getFormData("glasslist"));
        model.addTypeDrink(getFormData("typelist"));
        model.addImgDrink(getFormData("uploadimg"));

        //need to empty object afterwards
        console.log(newdrink);
    }


    return (<React.Fragment><CreateTitleView />,
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
                <CreateSaveView startCreate={() => saveData()} />
            </div>
        </div>
    </React.Fragment>
    )
};

export default CreatePresenter;