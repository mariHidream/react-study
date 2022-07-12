import React from 'react';

function DragAndDrop(e,t) {    

    const f = (event, type)=>{
        event.preventDefault();
        event.stopPropagation();
        console.log(event)
        console.log(type)
    }
    return f(e,t)
}

export default DragAndDrop;