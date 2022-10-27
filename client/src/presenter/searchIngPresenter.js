import React, { useState, useEffect } from "react";
import Select from "react-select";
import { gql, useLazyQuery } from "@apollo/client";



const GET_ALL_INGREDIENTS = gql`
	query Query{
		getAllIngredients
	}
`;

export default function SearchIng({ model, addIng }) {
	const [allIng, setAllIng] = useState([]);
	const currentOptions = [];
	const [getAllIngredients, { data, loading, error }] = useLazyQuery(GET_ALL_INGREDIENTS, {
		onCompleted: (data) => {
			const ingredientsArray = data.getAllIngredients;
			const ingredientDict = ingredientsArray.map((ingredient) => {
				return { value: ingredient, label: ingredient }
			})
			setAllIng(ingredientDict);
		}
	});


	const customStyles = {
		option: (styles, state) => ({
			...styles,
			cursor: 'pointer',
		}),
		control: (styles) => ({
			...styles,
			cursor: 'pointer',
			border: '3px solid rgb(127,127,127)',
			borderRadius: '12px',
			width: '260px'
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
				addIng(dic2arr(selected));

			}}
			isMulti={true}
		/>
	);
}
