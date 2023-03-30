import { createGlobalStyle } from "styled-components";
import { color } from "./style_constants";

// Global Style
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        height: 100%;
        width: 100%;
        background-color: ${color.white};
        overflow-x: hidden;

        &::-webkit-scrollbar {
        cursor: pointer;
        width: 6px;
        height: 6px;
        }

        &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: ${color.whiteFadeBg};
        }

        &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${color.blue};
        }

        &::-webkit-scrollbar-thumb:hover {
        background: ${color.blueDark};
        }
    }
`;