import React from 'react';
import Item from './Item';

export default function ItemList({itemList}) {

  const itemCards = itemList.map(item => 
    <Item 
      key={item.id}
      item={item}
    />
  )

    //TODO: Render All Items in STORE.JSON
  return (
    <div>
        <h1>Item List</h1>
        {itemCards}
    </div>
  )
}