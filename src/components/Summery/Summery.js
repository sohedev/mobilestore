// import { Button, Typography } from "@material-ui/core";
// import React, { useContext } from "react";
// import { ProductConsumer } from "../../context";
// import "./Summery.css";

// const Summery = ({ values, closeModal }) => {
//   const context = useContext(ProductConsumer);
//   const { cartTotal, cart } = context;
//   return (
//     <div className="summery__container">
//       <div className="summery__items">
//         <Typography variant="h4" gutterBottom>
//           Thanks Dear {values[0]} {values[1]}
//         </Typography>
//         <Typography variant="h5" gutterBottom>
//           Your Items:
//         </Typography>
//         {cart.map((cartItem) => {
//           return (
//             <Typography variant="h6" key={cartItem.id} gutterBottom>
//               {cartItem.title}
//               {"  "}
//               <strong>x{cartItem.count}</strong>
//             </Typography>
//           );
//         })}
//         <Typography variant="h5" gutterBottom>
//           Your Payment: ${cartTotal}
//         </Typography>
//         <Typography variant="subtitle1" gutterBottom>
//           your will recieve your orders 2 days later at:{" "}
//           <strong>{values[3]}</strong> with zipcode: {values[4]}
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           wish see you agein;)
//         </Typography>
//         <Button onClick={closeModal()}>CLOSE</Button>
//       </div>
//     </div>
//   );
// };

// export default Summery;
