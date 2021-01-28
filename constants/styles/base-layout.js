import { createGlobalStyle } from 'styled-components'
import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const BaseLayout = createGlobalStyle`
    ${dom.css()}
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        background-color: rgb(0,0,0);
        color: white;
        max-width: 100vw;
        height: auto;
        margin: 0;
        padding: 0;

        text-rendering: optimizeLegibility;
    }
`;

export default BaseLayout

