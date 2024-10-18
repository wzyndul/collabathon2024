import { css } from "@emotion/react";

export const cardStyle = css`
	border: 1px solid rgba(194, 194, 194, 1);
	box-shadow: none;
	height: 9rem;
	padding: 0;

	&:hover {
		border-top: 1px solid rgba(194, 194, 194, 1);
		border-left: 1px solid rgba(194, 194, 194, 1);
		-webkit-box-shadow: 4px 4px 0px 0px rgba(194, 194, 194, 1);
		-moz-box-shadow: 4px 4px 0px 0px rgba(194, 194, 194, 1);
		box-shadow: 4px 4px 0px 0px rgba(194, 194, 194, 1);
	}
`;

export const cardHeaderStyle = css`
	padding: 0.8rem 0 0.8rem 1rem;
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
