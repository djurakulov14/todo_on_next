import React from 'react'
import { useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { reducer } from '../Reducer/reducer'
import Todo from './Todo'
import searchContext from '../Contexts/serachContext'


const TodosContainer = ({todos}) => {
    const { searchText } = useContext(searchContext);
	const [state, dispatch] = useReducer(reducer, [])
  
  useEffect(() => {
    dispatch({type: "SET", payload: todos})
  }, [  ])
  

	const removePost = (data) => {
		dispatch({type: "REMOVE", payload:data.id})
	}

	const searchedTodos = useMemo(() => {
        return state?.arr?.filter(item => item.title.toLowerCase().includes(searchText.toLocaleLowerCase().trim()))
    },[searchText, state?.arr])



  return (
    <div>
        {
      searchedTodos?.length > 0 ? 
			<section className=' container m-auto flex flex-col gap-7'>
				{
          searchedTodos?.map((item, index) => <Todo key={item.id} index={index} remove={removePost} item={item} dispatch={dispatch}/>)
				}
			</section>
			:
			<section className=' container m-auto text-center'>
				<h1 className='text-bold text-3xl'>NOTHING FOUND</h1>
			</section>
		}
    </div>
  )
}

export default TodosContainer