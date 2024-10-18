import { css } from "@emotion/react";

export const buttonStyle = (bgColor?: string, txtColor?: string) => css`
	border-radius: 1rem;
	background-color: ${bgColor};
	color: ${txtColor};
	text-transform: none;
`;
