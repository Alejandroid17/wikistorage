import css from "styled-jsx/css";
import {colors} from "./theme"
import {addOpacityToColor} from "./utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`

  html {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
    radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    height: 100%;
  }

  body {
    background: transparent !important;
  }

  #__next {
    height: 100vh;
  }

  html[theme='dark'] {
    filter: invert(1) hue-rotate(180deg)
  }

  html[theme='dark'] .react_tinylink_card_media {
    filter: invert(1) hue-rotate(180deg)
  }
`