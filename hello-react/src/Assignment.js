import React, {useState} from 'react'
import Assignmentitem from "./Assignmentitem";


const Assignment = ()=>{

    const [data, getData] = useState([
        {id:1, title : 'item 0'},
        {id:2, title : 'item 1'},
        {id:3, title : 'item 3'},
        {id:4, title : 'item 4'},
        {id:5, title : 'item 5'},
        {id:6, title : 'item 2'},
        {id:7, title : 'item 6'},
        {id:8, title : 'item 7'},
        {id:9, title : 'item 8'},
        {id:10, title : 'item 9'}
    ])

    return (
        <>
            <Assignmentitem data={data}/>
        </>
    );

}

export default Assignment ;