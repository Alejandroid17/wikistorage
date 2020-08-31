import css from "styled-jsx/css";
import {colors} from "./theme"
import {addOpacityToColor} from "./utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
    radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
  }
  
  .w-100 {
    width: 100%
  }
  
  @media (max-width: 1025px) {
    main {
      padding-top: 5rem;
      overflow-y: hidden;
    }
    
    .navbar .column {
      width: 100% !important;
      padding: 0.5rem 0.75rem;
    }
    
    .navbar {
      padding-top: 0.5rem;
    }
  }
`