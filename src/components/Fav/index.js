import React from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

import "./Fav.css";

export default function Fav({ id }) {
	const { isLogged, addFav, favs } = useUser();
	const [, navigate] = useLocation();

	const isFaved = favs.some((favId) => favId === id);

	const handleClick = () => {
		if (!isLogged) return navigate("/login");
		addFav({ id });
	};

	const [label, emoji] = isFaved
		? ["Remove Gif from favorites", "❌"]
		: ["Add Gif from favorites", "💖"];

	return (
		<button className="gf-Fav" onClick={handleClick}>
			<span role="img" aria-label={label}>
				{emoji}
			</span>
		</button>
	);
}
