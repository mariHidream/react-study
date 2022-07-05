import React, {useRef, useState} from 'react'
import AddItem from './AddItem';
import Assignmentitem from "./Assignmentitem";
import './style.css'

const data = [
    {id:1, title : 'item 0'},
    {id:2, title : 'item 1'},
    {id:3, title : 'item 3'},
    {id:4, title : 'item 4'},
    {id:5, title : 'item 5'},
    {id:6, title : 'item 2'},
    {id:7, title : 'item 6'},
    {id:8, title : 'item 7'},
]
/*  
    1. 클릭이벤트 (클릭하면 색 변화게)
    2. 추가 , 삭제 기능 만들기
    3. 인풋에 입력한 텍스트로 아이템 추가, 
*/

const Assignment = ()=>{
    const idNum = useRef(data.length + 1);
    const [list, setList] = useState(data);

    const onDel = (id)=>{
        setList(list.filter(item => item.id !== id))
    }
    const onAdd = (put)=>{
        put.id = idNum.current++;
        setList([ ...list, put])
    }
    

    return (
        <div className='con'>
            <AddItem onAdd={onAdd} />
            <Assignmentitem list={list} onDel={onDel} />
        </div>
    );
}

export default Assignment ;