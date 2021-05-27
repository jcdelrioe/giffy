import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [, navigate] = useLocation();
	const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

	useEffect(() => {
		if (isLogged) navigate("/");
	}, [isLogged, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		login({ username, password });
	};

	return (
		<>
			{isLoginLoading && <strong>Checking credentials...</strong>}
			{!isLoginLoading && (
				<form onSubmit={handleSubmit}>
					<input
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username"
						value={username}
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="password"
						value={password}
					/>
					<button>Login</button>
				</form>
			)}
			{hasLoginError && <strong>Credentials are invalid</strong>}
		</>
	);
}
