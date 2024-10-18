import { css } from "@emotion/react";

export const cardStyle = css`
	border: 1px solid #DBE2E5;
    background-color: #fbfbfe;
    border-radius: 1rem;
	box-shadow: none;
	height: 9rem;
	padding: 0;
    transition: transform 0.3s ease-in-out;

	&:hover {
		border-top: 1px solid #DBE2E5;
		border-left: 1px solid #DBE2E5;
		-webkit-box-shadow: 4px 4px 0px 0px #DBE2E5;
		-moz-box-shadow: 4px 4px 0px 0px #DBE2E5;
		box-shadow: 4px 4px 0px 0px #DBE2E5;
         transform: translate(-4px, -4px);
	}
`;

export const cardHeaderStyle = css`
	padding: 0.8rem 0 0 1rem;
`;

export const cardContentStyle = css`
	padding: 0.5rem 0 0 1rem;
`;

export const cardActionsStyle = css`
	display: flex;
	justify-content: flex-end;
	margin-top: 0.5rem;
	padding: 0 0.8rem 0 0;
`;
