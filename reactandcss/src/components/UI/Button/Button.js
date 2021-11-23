import React from 'react';
import classes from "./Button.module.css"



const Button = props => {
  return (

    // Using css modules - these clases will only be available in this component
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;



// import styled from 'styled-components'

// import './Button.css';

// button is a method on the styled object
// `` this will be executed as a method behind the scenes
// this is javascript template literal syntax
// This has methods for all the different html components
// const Button = styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;


//   @media (min-width: 768px){
//     width: auto;
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;