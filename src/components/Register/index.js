import React, { useState } from "react";
import registerService from "services/register";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Register() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const [registered, setRegistered] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = (values) => {
		setIsSubmitting(true);
		registerService(values).then(() => {
			setRegistered(true);
			setIsSubmitting(false);
		});
	};

	if (registered) {
		return (
			<h4>
				Congratulations{" "}
				<span role="img" aria-label="emoji">
					✅
				</span>
				! You've been successfully registered!
			</h4>
		);
	}

	return (
		<>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<input
					className={errors.username ? "error" : ""}
					name="username"
					placeholder="Put here the username"
					{...register("username", { required: "This is required." })}
				/>
				<ErrorMessage
					errors={errors}
					name="username"
					render={({ message }) => <small>{message}</small>}
				/>

				<input
					className={errors.password ? "error" : ""}
					name="password"
					placeholder="Put here the password"
					type="password"
					{...register("password", { required: "This is required." })}
				/>
				<ErrorMessage
					errors={errors}
					name="password"
					render={({ message }) => <small>{message}</small>}
				/>

				<button className="btn" disabled={isSubmitting}>
					Registrarse
				</button>
			</form>
		</>
	);
}
