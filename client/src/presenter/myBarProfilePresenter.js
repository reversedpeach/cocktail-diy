import React from "react";
import { gql, useMutation } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";
import MyBarProfileView from "../view/myBarProfileView.js";


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
    return (<MyBarProfileView myBar={myBar} onRemove={removeIngredientFromBar} />)


}

export default MyBarProfile;
