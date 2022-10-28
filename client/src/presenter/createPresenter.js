import React, { useEffect, useState } from "react";
import useModelProp from "../utils/useModelProp.js";
import getFormData from "../utils/getFormData.js";
import CreateView from "../view/createView.js";
import { gql, useMutation, useLazyQuery } from "@apollo/client";


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
    const [createDrink, { data, loading, error }] = useMutation(CREATE_DRINK_MUTATION, { onCompleted: (data) => { }, onError: (error) => { } });



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

    function resetStatus() {
        setStatus("")
        setSuccess(false);
    }

    useEffect(() => {
        if (error) {
            console.log("Error;", error)
            setStatus("Something went wrong:\n " + error.message);
            setSuccess(false);
            setTimeout(() => { resetStatus() }, 5000)
        }
        else if (!loading && data) {
            console.log(data);
            setStatus("Drink saved!")
            setSuccess(true);
            setTimeout(() => { resetStatus() }, 3000)
        }
    }, [data, loading, error])

    return (<CreateView model={model} success={success} loading={loading} saveDrink={saveDrink} status={status} setName={setName} ingredients={ingredients} glassList={glassList} typeList={typeList} setGlass={(glass) => model.addGlassDrink(glass)} setType={(type) => model.addTypeDrink(type)} />);
};

export default Create;