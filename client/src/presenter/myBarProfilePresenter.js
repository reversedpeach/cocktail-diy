import MyBarView from "../view/myBarView.js";
import React from "react";
import { gql, useMutation } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";
import MyBarProfileElemView from "../view/myBarProfileElemView.js";


const CHANGE_MY_BAR_MUTATION = gql`
    mutation ChangeMyBar($newMyBar: [String]) {
        changeMyBar(newMyBar: $newMyBar)
    }
`;

function MyBarProfile({ model }) {
    const myBar = useModelProp(model, "mybar");
    const [changeMyBar, { myBarData, myBarLoading, myBarError }] = useMutation(CHANGE_MY_BAR_MUTATION);

    async function saveMyBarToServer(newBar) {
        changeMyBar({
            variables: {
                newMyBar: newBar
            },
        });
    }

    function removeIngredientFromBar(ingredient) {
        model.removeElemBar(ingredient);
        saveMyBarToServer(model.mybar);
    }

    return (
        <React.Fragment>
            <MyBarView />
            <div className="barRow">{
                myBar.map((element, index) => (
                    <MyBarProfileElemView key={index} barIng={element[0].toUpperCase() + element.slice(1)} onRemove={removeIngredientFromBar} />
                ))}
            </div>
        </React.Fragment>);
}

export default MyBarProfile;
