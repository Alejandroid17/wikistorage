import css from 'styled-jsx/css';

export const transitionDuration = 200;

export const globalStyles = css.global`
    .react_tinylink_card {
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.1) 3px 7px 8px 1px;
    }
`

export const defaultTransitionStyle = {
    transition: `opacity ${transitionDuration}ms ease-in-out`,
    opacity: 0,
};

export const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0}
}