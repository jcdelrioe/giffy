/** @jsx jsx */
/** @jsxFrag React.Fragment*/

// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet";
import { css, jsx } from "@emotion/react";
import SearchForm from "components/SearchForm";
import Button from "components/Button";

const gifsErrors = [
	"d2jjuAZzDSVLZ5kI",
	"Bp3dFfoqpCKFyXuSzP",
	"hv5AEBpH3ZyNoRnABG",
	"hLwSzlKN8Fi6I",
];

const pageErrorsStyles = css`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	text-align: center;
`;

const codeErrorstyles = css`
	font-size: 5rem;
	font-weight: bold;
	font-style: italic;
`;

const msgErrorStyles = css`
	font-size: 1.5rem;
	margin: 1rem 0;
`;

const SIZE = "300px";

const gifErrorStyle = css({
	margin: "1rem auto",
	width: SIZE,
	height: SIZE,
	objectFit: "cover",
	"&:hover": {
		transform: "scale(1.2)",
	},
});

export default function ErrorPage() {
	const randomImage = () => {
		return `https://media.giphy.com/media/${
			gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
		}/giphy.gif`;
	};

	return (
		<>
			<Helmet>
				<title>Error 404 | Giffy</title>
			</Helmet>
			<header className="o-header">
				<SearchForm />
			</header>
			<div className="App-wrapper">
				<div css={pageErrorsStyles} className="App-main">
					<span css={codeErrorstyles}>404</span>
					<span css={msgErrorStyles}>
						Sometimes gettings lost isn't that bad
					</span>
					<img css={gifErrorStyle} src={randomImage()} alt="alt-page-404" />
					<Button href="/">Go back home</Button>
				</div>
			</div>
		</>
	);
}
