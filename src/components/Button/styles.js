import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

const SIZES = {
	small: "1rem",
	medium: "2rem",
	large: "3rem",
};

const getFontSize = (props) => {
	const size = SIZES[props.size];
	if (!size) {
		console.warn(
			`[Button styled Component] This size is not correct. Use ${Object.keys(
				SIZES
			).join(", ")}`
		);
		return SIZES.small;
	}
};

// const commonStyles = `
// 	background-color: var(--brand-color_3);
// 	border: 1px solid transparent;
// 	color: var(--theme-body-txt);
// 	cursor: pointer;
// 	font-size: 1rem;
// 	padding: 0.5rem 1rem;
// 	:hover {
// 		background-color: var(--brand-color_2);
// 	}
// 	[disabled] {
// 		opacity: 0.3;
// 		pointer-events: none;
// 	}
// `;

export const Link = styled(LinkWouter)`
	background-color: ${(props) => props.theme.colors.primary};
	border: 1px solid transparent;
	color: ${({theme}) => theme.colors.textColor};
	cursor: pointer;
	font-size: ${getFontSize};
	padding: 0.5rem 1rem;
	:hover {
		background-color: var(--brand-color_2);
	}
	[disabled] {
		opacity: 0.3;
		pointer-events: none;
	}
`;

export const Button = Link.withComponent("button"); //para exportar los estilos a otro tipo de html

// Para aumentar estilos en etiquetas que tienen estilos comunes
// export const Button = styled("button")`
// 	${commonStyles}
// 	font-size: 1.5rem
// `;
