import { css } from "@emotion/react";

export const cardStyle = css`
    border: 1px solid rgba(255, 233, 11, 1);
    box-shadow: none;
    height: 9rem;

	&:hover {
        border-top: 1px solid rgba(255, 233, 11, 1);
        border-left: 1px solid rgba(255, 233, 11, 1);
		-webkit-box-shadow: 4px 4px 0px 0px rgba(255, 233, 11, 1);
		-moz-box-shadow: 4px 4px 0px 0px rgba(255, 233, 11, 1);
		box-shadow: 4px 4px 0px 0px rgba(255, 233, 11, 1);
	}
`;
