import React from 'react';

const ListItem = ({item,onDel,onDrag}) => {
    return (
        <li 
            onDrop={(event)=> onDrag(event,'drop')}
            onDragEnter={(event) => onDrag(event, 'enter')}
            onDragLeave={(event) => onDrag(event, 'leave')}
        >
            <span>{item.title}</span>
            <button onClick={()=>onDel(item.id)} >삭제</button>
        </li>
    );
};

export default ListItem;
