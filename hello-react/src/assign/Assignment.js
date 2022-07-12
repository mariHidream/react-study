import React, {useRef, useState} from 'react'
import AddItem from './AddItem';
import ListItem from './ListItem'
import useGetList from './useGetList'
import dropEvent from "./DragAndDrop";
import './style.css'

/*  
    4회차 스터디
        1. 클릭이벤트 (클릭하면 색 변화게)
        2. 추가 , 삭제 기능 만들기
        3. 인풋에 입력한 텍스트로 아이템 추가, 
    5회차 스터디
        1. 마우스 끌어다놓기로 이동 + 추가 (위아래이동, 다른 컨텐츠 이동)
        2. 리덕스 사용하기
        3. 
*/


const Assignment = ()=>{
    
    const [list, setList] = useState(useGetList(5,'item') || []);
    const [newlist, setNewList] = useState([])
    const idNum = useRef(list.length + 1);

    const onDrag = (e,t) =>{
        dropEvent(e,t)
        console.log(e,t)
    }

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
            <div className='list-wrap'>
                <ul>
                    {
                        list.map(item => <ListItem key={item.id} item={item} onDel={onDel} onDrag={onDrag}/>)
                    }
                </ul>
                <ul>
                    {
                        newlist.map(item => <ListItem key={item.id} item={item} onDel={onDel} />)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Assignment ;