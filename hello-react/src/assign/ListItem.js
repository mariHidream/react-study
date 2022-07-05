import React, { useState } from 'react';

const ListItem = ({item,onDel}) => {

   
    return (
        <li >
            <span>{item.title}</span>
            <button onClick={()=>onDel(item.id)} >삭제</button>
        </li>
    );
};

export default ListItem;