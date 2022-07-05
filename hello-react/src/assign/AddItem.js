import React, { useRef, useState } from 'react';

const AddItem = ({onAdd}) => {

    const [put, setPut] = useState({
        title : ''
    })
    const titleRef = useRef(null)

    const {title} = put

    const changeInput = (e) => {
        const { value, name } = e.target
        setPut({
            ...put,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd(put)

        setPut({title:'' })
        titleRef.current.focus();
    } 

    return (
        <div >
            <input type="text" name="title" value={title} onChange={changeInput} ref={titleRef}></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default AddItem;