import { css } from "@emotion/react";

export const chatbotHeaderStyle = css`
	background-color: #002e3c;
	border-radius: 1rem 1rem 0 0;
	color: #fff;
	padding: 1.5rem;
`;

export const chatWindowStyle = css`
	flex: 1;
	padding: 1.8rem;
	overflow-y: auto;
	height: 27rem;
	background-color: #F1EFED;
	border-bottom: 1px solid #ddd;
`;

export const dialogLineContainerStyle = (isUser: boolean) => css`
	display: flex;
	justify-content: ${isUser ? "flex-end" : "flex-start"};
	margin-bottom: 1rem;
`;

export const dialogBubbleStyle = (isUser: boolean) => css`
    position: relative;
    padding: 1rem;
    background-color: ${isUser ? "#002E3C" : "#fbfbfb"};
    color: ${isUser ? "white" : "black"};
    border-radius: 20px;
    max-width: 75%;

    // adding triangle to the dialog window
    // &::before {
    //     content: '';
    //     position: absolute;
    //     bottom: -15px;
    //     ${isUser ? 'right: 20px;' : 'left: 20px;'}
    //     border-width: 10px 10px 0;
    //     border-style: solid;
    //     border-color: ${isUser ? '#002E3C' : '#fbfbfb'} transparent transparent transparent;
    // }

    // &::after {
    //     content: '';
    //     position: absolute;
    //     bottom: -14px;
    //     ${isUser ? 'right: 20px;' : 'left: 20px;'}
    //     border-width: 10px 10px 0;
    //     border-style: solid;
    //     border-color: ${isUser ? '#002E3C' : '#fbfbfb'} transparent transparent transparent;
    // }
`;


export const userInputStyle = css`
	display: flex;
	align-items: center;
	padding: 1rem;
	background-color: #fbfbfe;
    border-radius: 0 0 1rem 1rem;
    // border: 1px solid #002E3C;
`;

export const iconButtonStyle = css`
    color: #002E3C;
    padding: 10px;
`;
