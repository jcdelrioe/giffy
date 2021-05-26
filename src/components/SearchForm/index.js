import React from "react";
import { useLocation } from "wouter";

import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
	const { keyword, rating, times, updateKeyword, updateRating } = useForm({
		initialKeyword,
		initialRating,
	});

	// eslint-disable-next-line
	const [path, pushLocation] = useLocation();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}/${rating}`);
	};

	const handleChange = (evt) => {
		updateKeyword(evt.target.value);
	};

	const handleChangeRating = (evt) => {
		updateRating(evt.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<button>Buscar</button>
			<input
				placeholder="Search a gif here..."
				onChange={handleChange}
				type="text"
				value={keyword}
			/>
			<select onChange={handleChangeRating} value={rating}>
				<option disabled>Rating type</option>
				{RATINGS.map((rating) => (
					<option key={rating}>{rating}</option>
				))}
			</select>
			<small>{times}</small>
		</form>
	);
}

export default React.memo(SearchForm);
