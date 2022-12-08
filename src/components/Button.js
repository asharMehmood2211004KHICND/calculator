import React from 'react'
import '../styles/Button.css';

export const Button = (props) => {
  return (
    <div class="Button" >
        <button>{props.text}</button>

    </div>
    
  )
}

// export const Button = ({ className, value, onClick }) => {
//     return (
//       <button className={className} onClick={onClick}>
//         {value}
//       </button>
//     );
//   };
  
