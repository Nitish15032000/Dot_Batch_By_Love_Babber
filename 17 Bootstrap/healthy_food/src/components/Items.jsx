
// const Items = (props) => {
//    let {foodItems} = props;
//   return (
//    //  <li key={props.foodItems} className='list-group-item'>
//    //    {props.foodItems}
//    //  </li>
//    // or

//     <li key={foodItems} className='list-group-item'>
//       {foodItems}
//     </li>
//   )
// }

      // or

import styles from "./Items.module.css";

const Items = ({items}) => {
  return (
    <li key={items} className='list-group-item'>
      <span className={`${styles["Li-Item"]}`}>{items}</span>
    </li>
  )
}

export default Items;