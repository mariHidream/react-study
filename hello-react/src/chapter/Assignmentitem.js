import React from 'react'


const Assignmentitem = ({data})=>{

    const style = {
        backgroundColor:'#999',
        listStyle : 'none',
        marginBottom: '5px',
        padding: '10px',
        fontWeight:500
    }
    
    return (
        <>
            <ul style={{
                backgroundColor : '#eee',
                width:'300px',
                padding: '10px'
            }}>
                {
                    data.map(item => <li style={style} key={item.id}>{item.title}</li>)
                }
            </ul>
        </>
    );

}

export default Assignmentitem ;