import React from 'react'
import Items from './Items'

const Fooditem = ({foodItems}) => {
  return (
    <ul class="list-group">
      {
        foodItems.map((item) => (
          // pass the Items in the Items.
          <Items items = {item}></Items>
        ))
      }
    </ul>
  )
}

export default Fooditem