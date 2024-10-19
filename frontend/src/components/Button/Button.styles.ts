import { css } from "@emotion/react";

// idk how does the border work in this configuration but I prefer not to investigate
export const buttonStyle = (bgColor?: string, txtColor?: string, bgHover?: string, variant?: 'outlined' | 'filled') => css`
    border-radius: 1rem;
    background-color: ${variant === 'outlined' ? 'transparent' : bgColor};
    color: ${txtColor};
    text-transform: none;
    border: ${variant === 'outlined' ? `1px solid ${txtColor}` : '1px solid ${txtColor}'};
    border-color: ${variant === 'outlined' ? `${txtColor}` : `${txtColor}`};

    &:hover {
        background-color: ${bgHover};
    }
`;