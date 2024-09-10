import { Checkbox, TextField } from '@mui/material'
import { RiTodoLine } from "react-icons/ri";
import { RiFunctionAddFill } from "react-icons/ri";
import React, { useContext, useEffect, useReducer, useState } from 'react'
import MyModal from './MyModal/MyModal';
import FromAdd from './FormAdd';
import searchContext from '../Contexts/serachContext';
import { reducer } from '../Reducer/reducer';

const Header = () => {
    const [visible, setVisible] = useState(false)
    const {searchText, changeSearchText} = useContext(searchContext)
    const [state, dispatch] = useReducer(reducer)
    
    
  return (
    <header className='  w-full text-white py-7 bg-blue-600 mb-8'>
        <div className="container m-auto flex justify-between items-center">
            <div className=" flex gap-3 items-center">
                <RiTodoLine size={35}/>
                <h1 className=' font-bold'>TO-DO APP</h1>
            </div>
            <div className="bg-white p-2 rounded-md">
                <TextField value={searchText} onChange={(e) => changeSearchText(e.target.value)} className=' w-[300px]' id="outlined-basic" label="Search" variant="outlined" />
            </div>
            <RiFunctionAddFill size={35} className=' cursor-pointer' onClick={() => setVisible(true)} />
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
            <FromAdd dispatch={dispatch} setVisible={setVisible}/>
        </MyModal>
    </header>
  )
}

export default Header