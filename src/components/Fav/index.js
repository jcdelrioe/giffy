import React, { useState } from "react";
// import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import Modal from "components/Modal";

import "./Fav.css";
import Login from "components/Login";

export default function Fav({ id }) {
	const { isLogged, addFav, favs } = useUser();
	// const [, navigate] = useLocation();
	const [showModal, setShowModal] = useState(false);

	const isFaved = favs.some((favId) => favId === id);

	const handleClick = () => {
		if (!isLogged) return setShowModal(true);
		addFav({ id });
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const handleLogin = () => {
		setShowModal(false);
	};

	const [label, emoji] = isFaved
		? ["Remove Gif from favorites", "❌"]
		: ["Add Gif from favorites", "💖"];

	return (
		<>
			<button className="gf-Fav" onClick={handleClick}>
				<span role="img" aria-label={label}>
					{emoji}
				</span>
			</button>
			{showModal && (
				<Modal onClose={handleClose}>
					<Login onLogin={handleLogin} />
				</Modal>
			)}
		</>
	);
}
