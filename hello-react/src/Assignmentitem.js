import React from 'react'


const Assignmentitem = ({data})=>{
    
    return (
        <>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        </>
    );

}

export default Assignmentitem ;