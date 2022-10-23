import React, { useState, useEffect } from "react";
import Select from "react-select";
import { gql, useLazyQuery } from "@apollo/client";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import styled from "styled-components";

const GET_ALL_INGREDIENTS = gql`
	query Query{
		getAllIngredients
	}
`;

export default function SearchIng({ model, addIng }) {
	const IngList = useModelProp(model, "mybar");
	const shakering = useModelProp(model, "currentdrink");
	const [options, setOptions] = useState([]);
	const [allIng, setAllIng] = useState([]);
	const currentOptions = [];
	const [getAllIngredients, { data, loading, error }] = useLazyQuery(GET_ALL_INGREDIENTS, {
		onCompleted: (data) => {
			console.log(data);
			const ingredientsArray = data.getAllIngredients;
			const ingredientDict = ingredientsArray.map((ingredient) => {
				return { value: ingredient, label: ingredient }
			})
			console.log(ingredientDict);
			setAllIng(ingredientDict);
		}
	});//


	const customStyles = {

		option: (styles, state) => ({
			...styles,
			cursor: 'pointer',
		}),
		control: (styles) => ({
			...styles,
			cursor: 'pointer',
			border: '3px solid rgb(127,127,127)',
		})
	};

	const [selectedOption, setSelectedOption] = useState(currentOptions);

	useEffect(() => {
		getAllIngredients();
	}, []);

	function dic2arr(ingDic) {
		return ingDic[0]["value"];
	}

	useEffect(() => {
		setSelectedOption(currentOptions);
	}, [model["currentdrink"]]);

	return (
		<Select
			styles={customStyles}
			value={selectedOption}
			options={allIng}
			placeholder="Search for an ingredient to add"
			onChange={(selected) => {
				console.log(selected);
				addIng(dic2arr(selected));

			}}
			isMulti={true}
		/>
	);
}
