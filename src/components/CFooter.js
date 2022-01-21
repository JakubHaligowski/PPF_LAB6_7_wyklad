import React from "react";
import './CFooter.css'

// function CFooter() {
//   let date = new Date();
//   return (
//     <div>
//       <h5>PPFront-end, przykłądowy serwis React. Dzisiaj mamy: {date.toDateString()}</h5>
//     </div>
//   );
// }

export const CFooter = (props) => {
  let date = new Date();
  return (
    <div className="footerDivClass">
      <h5 className="footerTextClass">
        PPFront-end, przykłądowy serwis React. Dzisiaj mamy:{" "}
        {date.toDateString()}{" "}
        <br/>
        Stan pogody: {props.weather}, temperatura: {props.temp}.
        <br/>
        {props.children}
      </h5>
    </div>
  );
};

// export const CFooter = () =>{
//     let date = new Date();
//     return React.createElement('div', {className: 'footerDivClass'},
//         React.createElement('h5', {id: 'footerText', className: 'footerTextClass'},
//             'PFront-end, przykładowy serwis React. Dzisiaj mamy:'+date.toDateString()));

// }

//export default CFooter;
