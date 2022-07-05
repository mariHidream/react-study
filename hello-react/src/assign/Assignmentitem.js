import React from 'react'
import ListItem from './ListItem'

const Assignmentitem = ({list, onDel})=>{

    return (
        <>
            <ul>
                {
                    list.map(item => <ListItem ey={item.id} item={item} onDel={onDel} />)
                }
            </ul>
        </>
    );

}

export default Assignmentitem ;