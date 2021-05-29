import React from "react";
// import { Link } from "wouter";
import {
	CategoryTitle,
	CategoryLink,
	CategoryList,
	CategoryListItem,
} from "./styles";

// import "./Category.css";

export default function Category({ name, options = [] }) {
	return (
		<section>
			<CategoryTitle>{name}</CategoryTitle>
			<CategoryList>
				{options.map((singleOption, index) => (
					<CategoryListItem key={singleOption} index={index}>
						<CategoryLink to={`/search/${singleOption}`}>
							{singleOption}
						</CategoryLink>
					</CategoryListItem>
				))}
			</CategoryList>
		</section>
	);
}
